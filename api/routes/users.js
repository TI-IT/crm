const express = require('express');
const { addUserToDb } = require('../services/users.services');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ ok: true, users: '123' });
});

router.get('/signup', async (req, res) => {
  await addUserToDb();

  res.json({ ok: true });
});

router.get('/:id', (req, res) => {
  res.json({ ok: true, users: req.params.id });
});

module.exports = router;
