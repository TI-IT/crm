const express = require('express');
const { save } = require('../services/users.services');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ ok: true, users: '123' });
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

router.get('/:id', (req, res) => {
  res.json({ ok: true, users: req.params.id });
});

module.exports = router;
