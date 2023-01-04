const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new mongoose.Schema(
  {
    password: {
      type: String,
    },
    username: {
      type: String,
      unique: true,
    },
    role: {
      type: String,
      default: 'user',
    },
  },
  { autoCreate: true },
);

const User = mongoose.model('users', schema);
module.exports = User;
