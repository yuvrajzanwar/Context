const mongoose = require('mongoose');

const hostSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
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
    required: true,
    unique: true
  },
  contests: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Contest'
  }]
});

const Host = mongoose.model('Host', hostSchema);

module.exports = Host;
