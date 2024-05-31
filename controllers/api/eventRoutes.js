const router = require('express').Router();
const { Event } = require('../../models');


  
  router.post('/', async (req, res) => {
    try {
      
      const eventData = await Event.create({
        ...req.body,
        user_id: req.session.user_id
      });
  
      if (!eventData) {
        return res.status(400).json({ message: 'Failed to create activity' });
      }
      console.log(eventData.id)
      
      
  
    } catch (err) {
      console.log(err)
      res.status(400).json(err);
    }
  });
  
  
  module.exports = router;
