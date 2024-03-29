// DEPENDENCIES/ REQUIREMENTS ____________________

  const router = require('express').Router();
  const { Tag, Product, ProductTag } = require('../../models');


//  TAG ROUTES. ENDPOINT: /api/tags ___________________

  // GET All Tags --------------------------------

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


  // GET Tag By Id. ENDPOINT: api/tags/<insert id number> ----------------

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


  // POST - Create a New Tag ---------------------------

    router.post('/', async (req, res) => {
      try {
        const tagDataNew = await Tag.create({
            tag_name: req.body.tag_name
        });

        res.json(tagDataNew);
      }
      catch (err) { 
          console.log(err);
          res.status(500).json(err);
      }
    });


  // PUT - Update a Tag Name by its id value ----------------

    router.put('/:id', async (req, res) => {
      try {
        const tagId = req.params.id;
        const tagDataUpdate = await Tag.update(
          {
            tag_name: req.body.tag_name
          },
          {
            where: {
              id: tagId
            }
          }
        );
        if(tagDataUpdate[0] === 0) {
          res.status(404).json({ message: 'No Tag found with this id'});
          return;    
        }
        
        res.json({ message: ` Tag id: ${tagId} updated successfully`});
      }
      catch(err) {
        console.log(err);
        res.status(500).json(err);
      }
    });


  // DELETE on tag by its `id` value

    router.delete('/:id', async (req, res) => {
      try {
        const tagId = req.params.id;

        const tagDataDelete = await Tag.destroy({
            where: {
                id: tagId
            },
        });

        if (tagDataDelete === 0) {
            res.status(404).json({ message: 'No Tag found with this id' });
            return;
        }

        res.json({ message: `Tag id: ${tagId} deleted successfully` });
      } catch(err) {
          console.log(err);
          res.status(500).json(err);
      }
      
    });



// EXPORT _____________________

  module.exports = router;
