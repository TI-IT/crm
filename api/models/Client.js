const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      require: true,
    },
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

const Client = mongoose.model('clients', schema);
module.exports = Client;
