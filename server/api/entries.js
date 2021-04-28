const router = require('express').Router();
const User = require('../db/models/user');
const Entry = require('../db/models/entry');
const requireToken = require('../auth/middlewares');

router.get('/:userId', requireToken, async (req, res, next) => {
  try {
    const { userId } = req.params;
    const allEntries = await Entry.findAll({
      where: {
        userId,
      },
    });
    res.json(allEntries);
  } catch (err) {
    next(err);
  }
});

router.get('/:userId/:entryId', requireToken, async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { entryId } = req.params;
    const oneEntry = await Entry.findOne({
      where: {
        id: entryId,
        userId,
      },
    });
    res.json(oneEntry);
  } catch (err) {
    next(err);
  }
});

router.post('/:userId', async (req, res, next) => {
  try {
    const { userId } = req.params;
    const newEntry = await Entry.create(req.body, {
      where: {
        userId,
      },
    });
    const returnedEntry = newEntry.toJSON();
    res.json(returnedEntry);
  } catch (err) {
    next(err);
  }
});

router.put('/:userId/:entryId', requireToken, async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { entryId } = req.params;
    const oneEntry = await Entry.findOne({
      where: {
        id: entryId,
        userId,
      },
    });
    res.json(oneEntry);
  } catch (err) {
    next(err);
  }
});

router.delete('/:userId/:entryId', requireToken, async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { entryId } = req.params;
    const oneEntry = await Entry.findOne({
      where: {
        id: entryId,
        userId,
      },
    });
    await oneEntry.destroy();
    res.send(oneEntry);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
