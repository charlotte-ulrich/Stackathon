//this is the access point for all things database related!

const db = require('./db');
const Sequelize = require('sequelize');
const User = require('./models/user');
const Entry = require('./models/entry');
//associations could go here!

User.hasMany(Entry);
Entry.belongsTo(User);

module.exports = {
  db,
  models: {
    User,
    Entry,
  },
};
