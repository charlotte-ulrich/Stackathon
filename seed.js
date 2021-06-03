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

const userOneEntries = [
  {
    title: 'Normal day',
    location: 'First Ascent Humboldt Park',
    type: 'boulder',
    date: '2020-10-04',
    boulderRedPoint: 3,
    boulderOnSite: 3,
    boulderProject: 5,
    shoes: 'sportivas',
    minutes: 110,
    userId: 1,
  },
  {
    title: 'Boulder time',
    notes: 'Making progress on my project',
    location: 'First Ascent Humboldt Park',
    type: 'boulder',
    date: '2020-12-04',
    boulderRedPoint: 3,
    boulderOnSite: 4,
    boulderProject: 6,
    shoes: 'sportivas',
    minutes: 120,
    userId: 1,
  },
  {
    title: 'New Year New Boulders',
    notes: 'Made a new friend!',
    location: 'First Ascent Humboldt Park',
    type: 'boulder',
    date: '2021-01-02',
    boulderRedPoint: 4,
    boulderOnSite: 4,
    boulderProject: 6,
    shoes: 'sportivas',
    minutes: 90,
    userId: 1,
  },
  {
    location: 'First Ascent Humboldt Park',
    type: 'boulder',
    date: '2021-03-04',
    boulderRedPoint: 4,
    boulderOnSite: 4,
    boulderProject: 5,
    shoes: 'sportivas',
    minutes: 110,
    userId: 1,
  },
  {
    title: 'Fun w/ pals',
    location: 'First Ascent Avondale',
    type: 'sport',
    date: '2020-12-12',
    sportRedPoint: 5.09,
    sportOnSite: 5.11,
    sportProject: 5.12,
    shoes: 'evolvs',
    minutes: 100,
    userId: 1,
  },
  {
    title: 'Off the couch and in the gym',
    notes: 'Needed this',
    location: 'First Ascent Avondale',
    type: 'sport',
    date: '2020-12-28',
    sportRedPoint: 5.1,
    sportOnSite: 5.11,
    sportProject: 5.11,
    shoes: 'evolvs',
    minutes: 110,
    userId: 1,
  },
  {
    location: 'First Ascent Avondale',
    type: 'sport',
    date: '2021-01-15',
    sportRedPoint: 5.11,
    sportOnSite: 5.12,
    sportProject: 5.12,
    shoes: 'solutions',
    minutes: 120,
    userId: 1,
  },
  {
    title: 'Date night',
    location: 'First Ascent Avondale',
    type: 'sport',
    date: '2021-02-14',
    sportRedPoint: 5.11,
    sportOnSite: 5.11,
    sportProject: 5.12,
    shoes: 'evolvs',
    minutes: 90,
    userId: 1,
  },
];

const userTwoEntries = [
  {
    title: 'Getting back into it',
    notes: 'Back in the gym after a break',
    location: 'First Ascent Humboldt Park',
    type: 'boulder',
    date: '2020-11-04',
    boulderRedPoint: 2,
    boulderOnSite: 2,
    boulderProject: 4,
    shoes: 'sportivas',
    minutes: 120,
    userId: 2,
  },
  {
    title: 'A good day for some boulders',
    location: 'First Ascent Humboldt Park',
    type: 'boulder',
    date: '2021-02-12',
    boulderRedPoint: 4,
    boulderOnSite: 3,
    boulderProject: 5,
    shoes: 'solutions',
    minutes: 110,
    userId: 2,
  },
  {
    location: 'Brooklyn Boulders',
    type: 'boulder',
    date: '2021-01-12',
    boulderRedPoint: 3,
    boulderOnSite: 4,
    boulderProject: 5,
    shoes: 'sportivas',
    minutes: 110,
    userId: 2,
  },
  {
    title: 'Afternoon climb',
    location: 'First Ascent Humboldt Park',
    type: 'boulder',
    date: '2021-04-04',
    boulderRedPoint: 5,
    boulderOnSite: 4,
    boulderProject: 6,
    shoes: 'sportivas',
    minutes: 120,
    userId: 2,
  },
  {
    title: 'Slow and Steady',
    notes: 'Working on getting my finger strength back',
    location: 'First Ascent Avondale',
    type: 'sport',
    date: '2020-11-30',
    sportRedPoint: 5.1,
    sportOnSite: 5.09,
    sportProject: 5.1,
    shoes: 'evolvs',
    minutes: 110,
    userId: 2,
  },
  {
    title: 'Scramblin',
    notes: 'Here for the fun',
    location: 'First Ascent Avondale',
    type: 'sport',
    date: '2020-12-14',
    sportRedPoint: 5.11,
    sportOnSite: 5.12,
    sportProject: 5.12,
    shoes: 'evolvs',
    minutes: 120,
    userId: 2,
  },
  {
    title: 'Really not into it today',
    location: 'First Ascent Avondale',
    type: 'sport',
    date: '2020-12-30',
    sportRedPoint: 5.1,
    sportOnSite: 5.1,
    sportProject: 5.12,
    shoes: 'evolvs',
    minutes: 114,
    userId: 2,
  },
  {
    notes: 'The gym was a little too busy for me today',
    location: 'First Ascent Avondale',
    type: 'sport',
    date: '2021-01-13',
    sportRedPoint: 5.11,
    sportOnSite: 5.12,
    sportProject: 5.12,
    shoes: 'evolvs',
    minutes: 90,
    userId: 2,
  },
];
const userThreeEntries = [
  {
    title: 'Getting back into it',
    notes: 'Back in the gym after a break',
    location: 'First Ascent Humboldt Park',
    type: 'boulder',
    date: '2020-11-04',
    boulderRedPoint: 4,
    boulderOnSite: 4,
    boulderProject: 6,
    shoes: 'evolvs',
    minutes: 120,
    userId: 3,
  },
  {
    title: 'Great day',
    notes: 'Making friends',
    location: 'First Ascent Humboldt Park',
    type: 'boulder',
    date: '2020-12-23',
    boulderRedPoint: 5,
    boulderOnSite: 4,
    boulderProject: 6,
    shoes: 'evolvs',
    minutes: 110,
    userId: 3,
  },
  {
    location: 'First Ascent Humboldt Park',
    type: 'boulder',
    date: '2020-10-20',
    boulderRedPoint: 5,
    boulderOnSite: 5,
    boulderProject: 7,
    shoes: 'sportivas',
    minutes: 110,
    userId: 3,
  },
  {
    title: 'Nice night',
    location: 'First Ascent Humboldt Park',
    type: 'boulder',
    date: '2021-02-04',
    boulderRedPoint: 6,
    boulderOnSite: 5,
    boulderProject: 7,
    shoes: 'solutions',
    minutes: 100,
    userId: 3,
  },
  {
    title: 'Crushed it',
    notes: 'Finally finished my project',
    location: 'First Ascent Avondale',
    type: 'sport',
    date: '2021-01-12',
    sportRedPoint: 5.11,
    sportOnSite: 5.1,
    sportProject: 5.12,
    shoes: 'evolvs',
    minutes: 100,
    userId: 3,
  },
  {
    location: 'First Ascent Avondale',
    type: 'sport',
    date: '2021-01-28',
    sportRedPoint: 5.12,
    sportOnSite: 5.1,
    sportProject: 5.12,
    shoes: 'evolvs',
    minutes: 100,
    userId: 3,
  },
  {
    title: 'Pleasant day',
    location: 'First Ascent Avondale',
    type: 'sport',
    date: '2021-01-12',
    sportRedPoint: 5.12,
    sportOnSite: 5.11,
    sportProject: 5.12,
    shoes: 'solutions',
    minutes: 110,
    userId: 3,
  },
  {
    title: 'Back outside!',
    location: 'The Red',
    type: 'sport',
    date: '2021-04-16',
    sportRedPoint: 5.1,
    sportOnSite: 5.09,
    sportProject: 5.1,
    shoes: 'sportivas',
    minutes: 200,
    userId: 3,
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
    const createdEntriesOne = await Promise.all(
      userOneEntries.map((entry) => {
        return Entry.create(entry);
      })
    );
    const createdEntriesTwo = await Promise.all(
      userTwoEntries.map((entry) => {
        return Entry.create(entry);
      })
    );
    const createdEntriesThree = await Promise.all(
      userThreeEntries.map((entry) => {
        return Entry.create(entry);
      })
    );
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;

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
