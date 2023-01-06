const dbConnect = require('./dbConnect');
const mongoose = require('mongoose');
const User = require('../models/User');

async function save(user) {
  await dbConnect();

  const collection = mongoose.model('users');

  await collection.create({
    email: user.email,
    password: user.password,
    username: 'user' + Date.now(),
    role: 'user',
  });
}

module.exports = { save };
