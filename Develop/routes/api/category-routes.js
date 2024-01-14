// DEPENDENCIES / REQUIREMENTS _____________________________
  const router = require('express').Router();
  const { Category, Product } = require('../../models');

// ROUTES ___________________________________________

  // GET All Categories ENDPOINT: /api/categories
    router.get('/', async (req, res) => {
      try {
            const categoryData = await Category.findAll ({
              include: [
                {
                  model: Product,
                  attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
                }
              ]

            })
            res.json(categoryData);
      } 
      catch (err) 
      {
        console.log(err);
        res.status(500).json(err);
      }

    });
  
    
  // GET By Id ENDPOINT: /api/categories/<insert id number> 


  // find all categories
  // be sure to include its associated Products



router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
