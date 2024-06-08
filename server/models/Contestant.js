const mongoose = require('mongoose');

const contestantSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  contest_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Contest',
    required: true
  },
  host_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Host',
    required: true
  }
});

const Contestant = mongoose.model('Contestant', contestantSchema);

module.exports = Contestant;
