const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
  res.render('homepage', {
    logged_in: req.session.logged_in
  })
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/', {
      logged_in: req.session.logged_in
    });
    return;
  }

  res.render('login', {
    logged_in: req.session.logged_in
  });
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/', {
      logged_in: req.session.logged_in
    });
    return;
  }

  res.render('signup', {
    logged_in: req.session.logged_in
  });
});

module.exports = router;

