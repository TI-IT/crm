const express = require('express');

const { save } = require('../../services/crm/products/products.service.js');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Products');
});

router.post('/add', async (req, res) => {
  const product = req.body;
  try {
    await save(product);

    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.json({ ok: false });
  }
});

module.exports = router;
