const router = require('express').Router();
const userRoutes = require('./userRoutes');
const eventRoutes = require('./eventRoutes');
const chatBoxRoutes = require('./chatBoxRoutes');

router.use('/users', userRoutes);
router.use('/events', eventRoutes);
router.use('/chatbox', chatBoxRoutes);

module.exports = router;
