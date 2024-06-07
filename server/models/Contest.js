const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionText: String,
  options: [String],
  correctAnswer: String,
  hints: [String],
  points: Number
});

const contestSchema = new mongoose.Schema({
  hostId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  questions: [questionSchema],
  duration: Number,
  schedule: Date,
  contestants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  leaderboard: [{
    contestantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    score: Number
  }]
});

const Contest = mongoose.model('Contest', contestSchema);

module.exports = Contest;
