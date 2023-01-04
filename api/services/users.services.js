const dbConnect = require('./dbConnect');
const mongoose = require('mongoose');
const User = require('../models/User');

async function addUserToDb() {
  await dbConnect();

  const collection = mongoose.model('users');

  await collection.create({
    username: 'tt777',
    password: '123',
    role: 'user',
  });
}

module.exports = { addUserToDb };
