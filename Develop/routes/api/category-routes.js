// DEPENDENCIES / REQUIREMENTS _____________________________
  const router = require('express').Router();
  const { Category, Product } = require('../../models');

// CATEGORY ROUTES ___________________________________________

  // GET All Categories ENDPOINT: /api/categories

    router.get('/', async (req, res) => {
      try {
            const categoryDataAll = await Category.findAll ({
              include: [
                {
                  model: Product,
                  attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
                }
              ]

            })
            res.json(categoryDataAll);
      } 
      catch (err) {
        console.log(err);
        res.status(500).json(err);
      }

    });
  
    
  // GET By Id ENDPOINT: /api/categories/<insert id number> 

    router.get('/:id', async (req, res) => {
      try {
        const categoryDataId = await Category.findOne({
          where: {
            id: req.params.id,
          },
          include: [
            {
              model: Product,
              attributes: ['product_name', 'price', 'stock', 'category_id' ],
            },
          ],

        });
        if (!categoryDataId) {
          res.status(404).json({ message: 'No category found with this id' });
          return;
        }
  
        res.json(categoryDataId);

      }
      catch(err) {
        console.log(err);
        res.status(500).json(err);
      }
    });


  // POST Create a new Category Name 
    // create a new category
    router.post('/', async (req, res) => {
      try {
          const categoryDataNew = await Category.create({
              category_name: req.body.category_name
          });
  
          res.json(categoryDataNew);
      }
      catch (err) { 
          console.log(err);
          res.status(500).json(err);
      }
    });
  






  // PUT update a category by its `id` value. ENDPOINT: /api/categories/<insert id here>______________________  

    router.put('/:id', async (req, res) => {
        try {
            const categoryId = req.params.id;
            const categoryDataUpdate = await Category.update(
                {
                  category_name: req.body.category_name,
                },
                {
                  where: {
                      id: categoryId,
                  },
                }
            );

            if (categoryDataUpdate[0] === 0) {
                res.status(404).json({ message: 'No category found with this id' });
                return;
            }

            res.json({ message: `Category id: ${categoryId} updated successfully` });
        }
        catch(err) {
            console.log(err);
            res.status(500).json(err);
        }
    });



  // DELETE / delete a category by its `id` value__________________________

      router.delete('/:id', async (req, res) => {
          try {
              const categoryId = req.params.id;

              const categoryDataDelete = await Category.destroy({
                  where: {
                      id: categoryId,
                  },
              });

              if (categoryDataDelete === 0) {
                  res.status(404).json({ message: 'No category found with this id' });
                  return;
              }

              res.json({ message: `Category id: ${categoryId} deleted successfully` });
          } catch(err) {
              console.log(err);
              res.status(500).json(err);
          }
      });


module.exports = router;
