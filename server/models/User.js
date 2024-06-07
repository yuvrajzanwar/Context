const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['developer', 'host', 'contestant'],
    required: true
  },
  name: String,
  email: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
