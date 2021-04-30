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
    type: Sequelize.FLOAT(3, 2),
    // min/max and set interval for numbers
  },
  boulderRedPoint: {
    type: Sequelize.INTEGER,
  },
  sportOnSite: {
    type: Sequelize.FLOAT(3, 2),
  },
  boulderOnSite: {
    type: Sequelize.INTEGER,
  },
  sportProject: {
    type: Sequelize.FLOAT(3, 2),
  },
  boulderProject: {
    type: Sequelize.INTEGER,
  },
  shoes: {
    type: Sequelize.STRING,
  },
  minutes: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Entry;
