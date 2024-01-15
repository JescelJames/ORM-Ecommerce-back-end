// DEPENDENCIES / REQUIREMENTS ______________________________
  const router = require('express').Router();
  const { Product, Category, Tag, ProductTag } = require('../../models');

// PRODUCT ROUTES. ENDPOINT:  /api/products ______________________________________
 
  // GET All Products     
    // find all products
    // be sure to include its associated Category and Tag data
    router.get('/', async (req, res) => {
      try {
        const productDataAll = await Product.findAll({
          include: [
            {
              model: Category,
              attributes: ['id', 'category_name'],
            },
            {
              model: Tag,
              attributes: ['tag_name','id'],
            },
          ],


        })
        res.json(productDataAll);

      }    
      catch {
        console.log(err);
        res.status(500).json(err);
      }
    
    });


  // GET One Product By Id. ENDPOINT:  /api/products/<insert product id> 
    // find a single product by its `id`
    // be sure to include its associated Category and Tag data
  
    router.get('/:id', async (req, res) => {
      try { 
        const productDataId = await Product.findOne({
          where: {
            id: req.params.id,
          },
          attributes: ['id', 'product_name', 'price', 'stock'],
          include: [
            {
              model: Category,
              attributes: ['id', 'category_name'],
            },
            {
              model: Tag,
            }
          ]
        })
        res.json(productDataId);
      
      } 
      catch {
        console.log(err);
        res.status(500).json(err);
      }

    });







  // POST Create A New Product
    
    router.post('/', (req, res) => {
      /* req.body should look like this...
        {
          "product_name": "Basketball",
          "price": 200.00,
          "stock": 3,
          "category_id": 1,
          "tagIds": [1, 2, 3, 4]
        }
      */
      Product.create(req.body)
        .then((product) => {
          // if there's product tags, we need to create pairings to bulk create in the ProductTag model
          if (req.body.tagIds.length) {
            const productTagIdArr = req.body.tagIds.map((tag_id) => {
              return {
                product_id: product.id,
                tag_id,
              };
            });
            return ProductTag.bulkCreate(productTagIdArr);
          }
          // if no product tags, just respond
          res.status(200).json(product);
        })
        .then((productTagIds) => res.status(200).json(productTagIds))
        .catch((err) => {
          console.log(err);
          res.status(400).json(err);
        });
    });


  // PUT Update Product By Id
    router.put('/:id', (req, res) => {
      // update product data
      Product.update(req.body, {
        where: {
          id: req.params.id,
        },
      })
        .then((product) => {
          if (req.body.tagIds && req.body.tagIds.length) {
            
            ProductTag.findAll({
              where: { product_id: req.params.id }
            }).then((productTags) => {
              // create filtered list of new tag_ids
              const productTagIds = productTags.map(({ tag_id }) => tag_id);
              const newProductTags = req.body.tagIds
              .filter((tag_id) => !productTagIds.includes(tag_id))
              .map((tag_id) => {
                return {
                  product_id: req.params.id,
                  tag_id,
                };
              });

                // figure out which ones to remove
              const productTagsToRemove = productTags
              .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
              .map(({ id }) => id);
                      // run both actions
              return Promise.all([
                ProductTag.destroy({ where: { id: productTagsToRemove } }),
                ProductTag.bulkCreate(newProductTags),
              ]);
            });
          }

          return res.json(product);
        })
        .catch((err) => {
          // console.log(err);
          res.status(400).json(err);
        });
    });


  // DELETE  one product by its `id` value
    router.delete('/:id', async (req, res) => {
      try {
        const productId = req.params.id;

        const productDataDelete = await Product.destroy({
            where: {
                id: productId,
            },
        });

        if (productDataDelete === 0) {
            res.status(404).json({ message: 'No product found with this id' });
            return;
        }

        res.json({ message: `Product id: ${productId} deleted successfully` });
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
      
    });

module.exports = router;
