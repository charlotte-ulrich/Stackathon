const Sequelize = require('sequelize');
const db = require('../db');

const Entry = db.define('entry', {
  title: {
    type: Sequelize.STRING,
    defaultValue: 'Climbing Session',
  },
  notes: {
    type: Sequelize.TEXT,
  },
  location: {
    type: Sequelize.STRING,
  },
  type: {
    type: Sequelize.ENUM('boulder', 'sport'),
  },
  date: {
    type: Sequelize.DATEONLY,
  },
  sportRedPoint: {
    type: Sequelize.FLOAT,
    // min/max and set interval for numbers
    // type: Sequelize.ENUM([6, 7, 8, 9, 10, 11, 12, 13, 14]),
  },
  boulderRedPoint: {
    type: Sequelize.INTEGER,
    // type: Sequelize.ENUM([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  },
  sportOnSite: {
    type: Sequelize.FLOAT,
    // type: Sequelize.ENUM([6, 7, 8, 9, 10, 11, 12, 13, 14]),
  },
  boulderOnSite: {
    type: Sequelize.INTEGER,
    // type: Sequelize.ENUM([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  },
  sportProject: {
    type: Sequelize.FLOAT,
    // type: Sequelize.ENUM([6, 7, 8, 9, 10, 11, 12, 13, 14]),
  },
  boulderProject: {
    type: Sequelize.INTEGER,
    // type: Sequelize.ENUM([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  },
  shoes: {
    type: Sequelize.STRING,
  },
  minutes: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Entry;
