const mongoose = require('mongoose');

const userProgressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  module: { type: mongoose.Schema.Types.ObjectId, ref: 'TrainingModule', required: true },
  completed: { type: Boolean, default: false },
  score: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('UserProgress', userProgressSchema);