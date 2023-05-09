const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');
const fetch = require('node-fetch');
const openai = require('openai');
const api_key_perenula = 'sk-f8iD645a9dc7bada0763'; // key for conner
require('dotenv').config();


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
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

//inital search
router.get('/search', async (req, res) => {
  const query = req.query.plant;
  const response = await fetch(`https://perenual.com/api/species-list?page=1&key=${api_key_perenula}&page=1&q=${query}`);
  const json = await response.json();
  const plants = json.data;
  console.log(plants)
  res.render('usersearch', {
    plants,
    loggedIn: req.session.loggedIn
  });
});

//clicked on plant
router.get('/search/:id', async (req, res) => {
  const response = await fetch(`https://perenual.com/api/species/details/${req.params.id}?key=${api_key_perenula}`);
  const plant = await response.json();
  res.render('plants', {
    plant,
    loggedIn: req.session.loggedIn
  });
});

router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: { id: req.params.id },
    attributes: [
      'id', 'title', 'post_text'
    ],
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
  res.render('chat-bot');
})

router.post('/chat',async (req, res) => {

//Configure OpenAI
const configuration = new openai.Configuration({
  organization: process.env.OPENAI_ORG,
  apiKey: process.env.OPENAI_API_KEY,
});

const openaiapi = new openai.OpenAIApi(configuration);
  
    const messages = req.body.messages;
    const model = req.body.model;
    const temp = req.body.temp;
  
    const completion = await openaiapi.createChatCompletion({
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