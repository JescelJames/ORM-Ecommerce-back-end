// DEPENDENCIES/ REQUIREMENTS ____________________

  const router = require('express').Router();
  const { Tag, Product, ProductTag } = require('../../models');


//  TAG ROUTES. ENDPOINT: /api/tags
  // GET All Tags. 

    router.get('/', async (req, res) => {
      // find all tags
      // be sure to include its associated Product data
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
    router.get('/:id', (req, res) => {

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
