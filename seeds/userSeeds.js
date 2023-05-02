const { User } = require('../models');

const userData = [
    {
        username: "jaimem",
        password: "pocketPlant123"
    },
    {
        username: "user1",
        password: "pocketPlant123"
    },
    {
        username: "user2",
        password: "pocketPlant123"
    },
    {
        username: "user4",
        password: "pocketPlant123"
    },
    {
        username: "user5",
        password: "pocketPlant123"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;