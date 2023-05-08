const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');
const fetch = require('node-fetch');
const api_key_trefile = 'cbwakGNwU0TEpsliY_x3nHAE00zbMxyRrjI6WEupJ_M';
const api_key_perenula = 'sk-o6oE64544d003e774763';

router.get('/', (req, res) => {
  Post.findAll({
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
      const posts = data.map((post) => post.get({ plain: true }));
      res.render('homepage', { 
        posts,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

//innital search
router.get('/search', async (req, res) => {
  const query = req.query.plant;
  console.log(query)
  const response = await fetch(`https://perenual.com/api/species-list?page=1&key=${api_key_perenula}&page=1&q=${query}`);
  const json = await response.json();
  const plants = json.data;
  res.render('usersearch', {
    plants,
    loggedIn: req.session.loggedIn
  });
});

//clicked on plant
router.get('/search/:id', async (req, res) => {
  const response = await fetch(`https://perenual.com/api/species/details/${id}?key=${api_key_perenula}`);
  const json = await response.json();
  const plant = json.data;
  res.render('plants', {
    plant,
    loggedIn: req.session.loggedIn
  });
});

router.get('/post/:id', (req, res) => {
  Post.findOne(req.params.id, {
    include: [
      {
        model: User,
        attributes: ['name'],
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
      res.render('single-post', {
        post,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/chat-bot', (req, res) => {
  res.render('chat-bot')
});

router.post('/chat', (req, res) => {
  const messages = req.body.messages;
  const model = req.body.model;
  const temp = req.body.temp;

  const completion = openaiapi.createChatCompletion({
      model: model,
      messages: messages,
      temperature: temp,
  });
  res.status(200).json({ result: completion.data.choices });
});

router.get('/about-us', (req, res) => {
  res.render('about-us');
});

module.exports = router;