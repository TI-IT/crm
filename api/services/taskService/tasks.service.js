const dbConnect = require('../dbConnect');
const mongoose = require('mongoose');
const Task = require('../../models/Tasks');
const { writeJson } = require('../jsFunctionsService/write.read.service');

async function writeTasks(data) {
  const writePath = 'tasks/tasks.json';
  const good = await writeJson(data, writePath);
  console.log('Записано');
}

async function save(task) {
  await dbConnect();

  const collection = mongoose.model('tasks');

  const taskname = 'task' + new Date().getTime();
  console.log({ taskname });

  await collection.create({
    email: task.email,
    password: task.password,
    taskname: taskname,
    role: 'task',
  });
}

async function getAllTasks() {
  await dbConnect();
  const collection = mongoose.model('tasks');

  const tasks = await collection.find({});
  return tasks;
}

async function deleteAllTasks() {
  await dbConnect();
  const collection = mongoose.model('tasks');

  const tasks = await collection.deleteMany({});
}

async function getTaskByEmailAndPassword(task) {
  await dbConnect();
  const collection = mongoose.model('tasks');

  const doc = await collection.findOne({ email: task.email, password: task.password });
  return doc;
}

async function getTaskById(_id) {
  await dbConnect();
  const collection = mongoose.model('tasks');
  const task = await collection.findOne({ _id: _id });
  return task;
}

async function updateTask(task) {
  await dbConnect();
  const collection = mongoose.model('tasks');
  const doc = await collection.findOne({ _id: task._id });

  doc['taskname'] = task.taskname;

  console.log(doc);

  await doc.save();
  return doc;
}

async function updateTaskPassword(task) {
  await dbConnect();
  const collection = mongoose.model('tasks');
  const doc = await collection.findOne({ _id: task._id });

  doc['password'] = task.password;

  await doc.save();
  return doc;
}

module.exports = {
  save,
  getAllTasks,
  deleteAllTasks,
  getTaskByEmailAndPassword,
  getTaskById,
  updateTask,
  updateTaskPassword,
  writeTasks,
};
