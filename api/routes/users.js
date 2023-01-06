const express = require('express');
const {
  save,
  getAllUsers,
  deleteAllUsers,
  getUserByEmailAndPassword,
} = require('../services/users.services');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ ok: true, users: '123' });
});

router.get('/get/all', async (req, res) => {
  const users = await getAllUsers();
  res.json({ ok: true, users: users });
});

router.get('/delete/all', async (req, res) => {
  const users = await deleteAllUsers();
  res.json({ ok: true, users: users });
});

router.post('/signup', async (req, res) => {
  const user = req.body;
  try {
    await save(user);
    res.json({ ok: true });
  } catch (error) {
    res.json({ ok: false });
    console.error(error);
  }
});

router.post('/login', async (req, res) => {
  const user = req.body;
  const doc = await getUserByEmailAndPassword(user);
  if (doc) {
    res.json({ ok: true });
  } else {
    res.json({ ok: false });
  }
});

router.get('/:id', (req, res) => {
  res.json({ ok: true, users: req.params.id });
});

module.exports = router;
