const { green, red } = require('chalk');
const { db } = require('./server/db');
const User = require('./server/db/models/user');
const Entry = require('./server/db/models/entry');

const users = [
  {
    username: 'mollyc',
    password: 'password1',
  },
  {
    username: 'charlotteu',
    password: 'password1',
  },
  {
    username: 'alexf',
    password: 'password1',
  },
];

const entries = [
  {
    title: 'Crushed it',
    notes: 'Finally finished my project',
    location: 'First Ascent Avondale',
    date: '2020-12-12',
    sportRedPoint: '5.11',
    sportOnSite: '5.10',
    sportProject: '5.11',
    shoes: 'evolvs',
    minutes: 100,
    userId: 3,
  },
  {
    title: 'Getting back into it',
    notes: 'Back in the gym after a break',
    location: 'First Ascent Humboldt Park',
    date: '2021-04-04',
    boulderRedPoint: 'V2',
    boulderOnSite: 'V2',
    boulderProject: 'V4',
    shoes: 'sportivas',
    minutes: 120,
    userId: 2,
  },
  {
    notes: 'Normal day',
    location: 'First Ascent Humboldt Park',
    date: '2021-04-04',
    boulderRedPoint: 'V3',
    boulderOnSite: 'V2',
    boulderProject: 'V5',
    shoes: 'sportivas',
    minutes: 120,
    userId: 1,
  },
  {
    title: 'Back outside!',
    location: 'The Red',
    date: '2020-08-06',
    sportRedPoint: '5.10',
    sportOnSite: '5.9',
    sportProject: '5.10',
    shoes: 'sportivas',
    minutes: 120,
    userId: 3,
  },
  {
    title: 'Slow and Steady',
    notes: 'Working on getting my finger strength back',
    location: 'First Ascent Avondale',
    date: '2020-11-30',
    sportRedPoint: '5.10',
    sportOnSite: '5.9',
    sportProject: '5.10',
    shoes: 'evolvs',
    minutes: 110,
    userId: 2,
  },
  {
    title: 'Sunny day',
    location: 'Brooklyn Boulders',
    date: '2021-01-12',
    boulderRedPoint: 'V4',
    boulderOnSite: 'V4',
    boulderProject: 'V5',
    shoes: 'solutions',
    minutes: 110,
    userId: 2,
  },
  {
    notes: 'Fun w/ pals',
    location: 'First Ascent Avondale',
    date: '2020-12-12',
    sportRedPoint: '5.10',
    sportOnSite: '5.10',
    sportProject: '5.12',
    shoes: 'evolvs',
    minutes: 100,
    userId: 1,
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });
    const createdUsers = await Promise.all(
      users.map((user) => {
        return User.create(user);
      })
    );
    const createdEntries = await Promise.all(
      entries.map((entry) => {
        return Entry.create(entry);
      })
    );
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'));
      db.close();
    })
    .catch((err) => {
      console.error(red('Oh noes! Something went wrong!'));
      console.error(err);
      db.close();
    });
}
