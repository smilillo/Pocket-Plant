const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');
<<<<<<< HEAD
const gardenRoutes = require('../gardenRoutes');
=======
// const chatBot = require('./chatBot');
// const browse = require('./browse');
>>>>>>> main

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
// router.use('/chatBot', chatBot);
// router.use('/browse', browse);

module.exports = router;
