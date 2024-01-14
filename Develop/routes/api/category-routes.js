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
    // find one category by its `id` value
    // be sure to include its associated Products
    router.get('/:id', async (req, res) => {
      try {
        const categoryDataId = await Category.findOne({
          where: {
            id: req.params.id,
          },
          // attributes: ['id', 'category_name'],
          include: [
            {
              model: Product,
              attributes: ['product_name'],
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


  // _______________  

    router.post('/', (req, res) => {
      // create a new category
    });

  // ________________________  

    router.put('/:id', (req, res) => {
      // update a category by its `id` value
    });


  // __________________________

    router.delete('/:id', (req, res) => {
      // delete a category by its `id` value
    });

module.exports = router;
