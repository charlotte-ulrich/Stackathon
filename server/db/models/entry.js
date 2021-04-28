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
  date: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  sportRedPoint: {
    type: Sequelize.ENUM(
      '5.6',
      '5.7',
      '5.8',
      '5.9',
      '5.10',
      '5.11',
      '5,12',
      '5.13',
      '5.14+'
    ),
  },
  boulderRedPoint: {
    type: Sequelize.ENUM(
      'V0',
      'V1',
      'V2',
      'V3',
      'V4',
      'V5',
      'V6',
      'V7',
      'V8',
      'V9',
      'V10+'
    ),
  },
  sportOnSite: {
    type: Sequelize.ENUM(
      '5.6',
      '5.7',
      '5.8',
      '5.9',
      '5.10',
      '5.11',
      '5,12',
      '5.13',
      '5.14+'
    ),
  },
  boulderOnSite: {
    type: Sequelize.ENUM(
      'V0',
      'V1',
      'V2',
      'V3',
      'V4',
      'V5',
      'V6',
      'V7',
      'V8',
      'V9',
      'V10+'
    ),
  },
  sportProject: {
    type: Sequelize.ENUM(
      '5.6',
      '5.7',
      '5.8',
      '5.9',
      '5.10',
      '5.11',
      '5.12',
      '5.13',
      '5.14+'
    ),
  },
  boulderProject: {
    type: Sequelize.ENUM(
      'V0',
      'V1',
      'V2',
      'V3',
      'V4',
      'V5',
      'V6',
      'V7',
      'V8',
      'V9',
      'V10+'
    ),
  },
  shoes: {
    type: Sequelize.STRING,
  },
  minutes: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Entry;
