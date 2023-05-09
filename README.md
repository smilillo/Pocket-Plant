# Pocket Plant - Team Project
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

TEAM: Chris, Jaime, Josh, Ruth, Sofie

## Project Description 
We created Pocket Plant to be a simple place to explore and store plants and plant care tips. Anyone is allowed to browse the plants from our api but a user must create a free account to be able to create their own posts. If a user needs more information on a plant they are interested in or want to post about, all they need to do is click on our ai chat buddy, Tad Pole. He has all the dirt on plant care and he can't wait to share it with you!
  
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Built With](#built-with)
- [Tests](#tests)
- [Contributors](#contributors)
- [License](#license)

## Installation
This project requires: node.js, npm, dotenv, express, mysql2, sequelize, and openAI. First, Node.js and MySQL will need to be downloaded locally onto the user device. Once this is achieved, install the dependencies by running the command: npm install.

## Usage 
Once installation instructions above have been completed, seed the database by running: node seeds/seeds. The server can now be started by entering the command: node server. Once the server is listening, visit http://localhost:3001 to interact with the application.

### Homepage
On the Pocket Plant homepage, the user is able to view all posts on the site as well as search for plants in the search bar.

### Dashboard
The dashboard shows only posts shared by the currently logged in user, as well as comments on those posts.

### TadPole - OpenAI ChatBot
Tad Pole is available by clicking on his image in the bottom right corner. The user is taken to a chat-bot page in which they can ask the AI any plant care questions and receive a detailed response.

### Deployed Application:
[Link to Deployed Heroku App](https://pocket-plant.herokuapp.com/)

## Built With
-HTML\
-CSS\
-Javascript\
-Bulma\
-SQL\
-Sequelize\
-Express\
-bcrypt\
-Handlebars\
-OpenAI

## Tests
N/A

## Contributors 
Chris Adams GitHub: [TrapAdams](https://github.com/TrapAdams)\
Jaime Marsh GitHub: [jaimemarsh](https://github.com/jaimemarsh)\
Josh Dawkins GitHub: [J05H94](https://github.com/J05H94)\
Ruth Stevens GitHub: [ruths98](https://github.com/ruths98)\
Sofie Milillo GitHub: [smilillo](https://github.com/smilillo)

## License
Please refer to the license in the repo.
