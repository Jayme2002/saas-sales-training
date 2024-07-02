const mongoose = require('mongoose');

const trainingModuleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  difficulty: { type: String, enum: ['beginner', 'intermediate', 'advanced'], required: true },
  points: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('TrainingModule', trainingModuleSchema);