const dbConnect = require('./dbConnect');
const mongoose = require('mongoose');
const User = require('../models/User');

async function save(user) {
  await dbConnect();
  const collection = mongoose.model('users');
  await collection.create({
    email: user.email,
    password: user.password,
    username: 'user' + new Date().getTime(),
    role: 'user',
  });
}

async function getUserByEmailAndPassword(user) {
  await dbConnect();
  const collection = mongoose.model('users');
  const doc = await collection.findOne({ email: user.email, password: user.password });
  return doc;
}

async function getAllUsers() {
  await dbConnect();
  const collection = mongoose.model('users');
  const users = await collection.find({});
  return users;
}

async function deleteAllUsers() {
  await dbConnect();
  const collection = mongoose.model('users');
  const users = await collection.deleteMany({});
}

async function getUserById(_id) {
  await dbConnect();
  const collection = mongoose.model('users');
  const user = await collection.findOne({ _id: _id });
  return user;
}

module.exports = { save, getAllUsers, deleteAllUsers, getUserByEmailAndPassword, getUserById };
