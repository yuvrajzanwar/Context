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
    ref: 'Host',
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
    ref: 'Contestant'
  }],
  leaderboard: [
    {
    contestantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Contestant'
    },
    username :{
      type : mongoose.Schema.Types.String,
      ref : 'Contestant'
    },
    score: Number
  }]
});

const Contest = mongoose.model('Contest', contestSchema);

module.exports = Contest;
