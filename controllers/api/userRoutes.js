const router = require('express').Router();
const { User } = require('../../models');

router.post('/login', async (req, res) => {
    try {
      // TODO: Add a comment describing the functionality of this expression
      const userData = await User.findOne({ where: { name: req.body.name } });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      // TODO: Add a comment describing the functionality of this expression
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect username or password, please try again' });
        return;
      }
  
      // TODO: Add a comment describing the functionality of this method
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.post('/signup', async (req, res) => {
    try {
      // Add new user info to database
      const userData = await User.create({name: req.body.name, email: req.body.email, password: req.body.password });
  
      if (!userData) {
        return res.status(400).json({ message: 'Failed to create user' });
      }
      console.log(userData.id)
      // Save the session cookies
      req.session.save(() => {
  
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.status(200).json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      console.log(err)
      res.status(400).json(err);
    }
  });
  
  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      // TODO: Add a comment describing the functionality of this method
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  
  module.exports = router;
