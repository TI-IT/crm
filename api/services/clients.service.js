const dbConnect = require('./dbConnect');
const mongoose = require('mongoose');
const Client = require('../models/Client');

async function save(client) {
  await dbConnect();

  const collection = mongoose.model('clients');

  const clientname = 'client' + new Date().getTime();
  console.log({ clientname });

  await collection.create({
    email: client.email,
    password: client.password,
    clientname: clientname,
    role: 'client',
  });
}

async function getAllClients() {
  await dbConnect();
  const collection = mongoose.model('clients');

  const clients = await collection.find({});
  return clients;
}

async function deleteAllClients() {
  await dbConnect();
  const collection = mongoose.model('clients');

  const clients = await collection.deleteMany({});
}

async function getClientByEmailAndPassword(client) {
  await dbConnect();
  const collection = mongoose.model('clients');

  const doc = await collection.findOne({ email: client.email, password: client.password });
  return doc;
}

async function getClientById(_id) {
  await dbConnect();
  const collection = mongoose.model('clients');
  const client = await collection.findOne({ _id: _id });
  return client;
}

async function updatClient(client) {
  await dbConnect();
  const collection = mongoose.model('clients');
  const doc = await collection.findOne({ _id: client._id });

  doc['clientname'] = client.clientname;

  console.log(doc);

  await doc.save();
  return doc;
}

async function updateClientPassword(client) {
  await dbConnect();
  const collection = mongoose.model('clients');
  const doc = await collection.findOne({ _id: client._id });

  doc['password'] = client.password;

  await doc.save();
  return doc;
}

module.exports = {
  save,
  getAllClients,
  deleteAllClients,
  getClientByEmailAndPassword,
  getClientById,
  updatClient,
  updateClientPassword,
};
