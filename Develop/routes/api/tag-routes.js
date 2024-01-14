// DEPENDENCIES/ REQUIREMENTS ____________________

  const router = require('express').Router();
  const { Tag, Product, ProductTag } = require('../../models');


//  TAG ROUTES. ENDPOINT: /api/tags
  // GET All Tags. 
    // find all tags
    // be sure to include its associated Product data
    router.get('/', async (req, res) => {

      try {
        const tagDataAll = await Tag.findAll({
          include: {
            model: Product
          }
        });

        res.json(tagDataAll);
      }
      catch(err) {
        console.log(err);
        res.status(500).json(err);
      }
    });


  // GET Tag By Id. ENDPOINT: api/tags/<insert id number>
      // find a single tag by its `id`
      // be sure to include its associated Product data
    
    router.get('/:id', async (req, res) => {
      try {
        const tagDataId = await Tag.findOne({
          where: {
            id: req.params.id
          },
          include: {
            model: Product
          }
        });
        
        if(!tagDataId) {
          res.status(404).json({ message: 'No Tag found with this id'});
          return;
        }
        res.json(tagDataId);
      }
      catch(err) {
        console.log(err);
        res.status(500).json(err);
      }

    });



    router.post('/', (req, res) => {
      // create a new tag
    });

    router.put('/:id', (req, res) => {
      // update a tag's name by its `id` value
    });

    router.delete('/:id', (req, res) => {
      // delete on tag by its `id` value
    });



// EXPORT _____________________

  module.exports = router;
