const db = require('./db');
const Sequelize = require('sequelize');
const User = require('./models/user');
const Entry = require('./models/entry');

User.hasMany(Entry);
Entry.belongsTo(User);

module.exports = {
  db,
  models: {
    User,
    Entry,
  },
};
