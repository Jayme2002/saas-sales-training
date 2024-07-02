const express = require('express');
const TrainingModule = require('../models/TrainingModule');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, async (req, res) => {
  try {
    const module = new TrainingModule(req.body);
    await module.save();
    res.status(201).json(module);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create module', error: error.message });
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const modules = await TrainingModule.find();
    res.json(modules);
  } catch (error) {
    res.status(400).json({ message: 'Failed to fetch modules', error: error.message });
  }
});

router.get('/:id', auth, async (req, res) => {
  try {
    const module = await TrainingModule.findById(req.params.id);
    if (!module) return res.status(404).json({ message: 'Module not found' });
    res.json(module);
  } catch (error) {
    res.status(400).json({ message: 'Failed to fetch module', error: error.message });
  }
});

module.exports = router;