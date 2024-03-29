const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
  Post.findAll({
    where: { user_id: req.session.user_id },
    attributes: [
      'id', 'title', 'post_text', 'user_id'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'user_id', 'post_id'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username'],
      }
    ],
  })
    .then(data => {
      const posts = data.map((post) => post.get({ plain: true }));
      console.log(posts);
      res.render('dashboard', {
        posts,
        loggedIn: true
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.get('/edit/:id', withAuth, (req, res) => {
  Post.findOne(req.params.id, {
    include: [
      {
        model: User,
        attributes: ['username'],
      },
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id'],
        include: {
          model: User,
          attributes: ['username']
        }
      }
    ],
  })
    .then(data => {
      if (!data) {
        res.status(404).json({ message: 'No post found' });
        return;
      }
      const post = data.get({ plain: true });
      res.render('edit-post', {
        post,
        loggedIn: true
      });
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

router.get('/new', (req, res) => {
  res.render('new_post');
});

module.exports = router;