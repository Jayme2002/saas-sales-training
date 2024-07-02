const express = require('express');
const UserProgress = require('../models/UserProgress');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, async (req, res) => {
  try {
    const progress = new UserProgress({ ...req.body, user: req.user.id });
    await progress.save();
    res.status(201).json(progress);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create progress', error: error.message });
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const progress = await UserProgress.find({ user: req.user.id }).populate('module');
    res.json(progress);
  } catch (error) {
    res.status(400).json({ message: 'Failed to fetch progress', error: error.message });
  }
});

module.exports = router;