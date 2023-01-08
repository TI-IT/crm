const express = require('express');
const {
  save,
  getAllclients,
  deleteAllclients,
  getclientByEmailAndPassword,
  getclientById,
  updateclient,
  updateclientPassword,
} = require('../services/clients.service');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ ok: true, clients: 'clients' });
});

router.get('/allclients', (req, res) => {
  fetch('https://yougile.com/api-v2/tasks?includeDeleted=false', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer w1cdqrHMxbbPVsbwDGqDAKMkWUatHEjP7Ez0l91Vatjxe7LI9PAivfdWFhZjhUGm',
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data) {
        res.json({ ok: true, clients: data.content });
      }
    })
    .catch((err) => {
      console.error(err);
    });
});

router.get('/me', async (req, res) => {
  const _id = req.session.client._id;

  const client = await getclientById(_id);

  res.json({ ok: true, client: client });
});

router.get('/get/all', async (req, res) => {
  const clients = await getAllclients();

  res.json({ ok: true, clients: clients });
});

router.get('/delete/all', async (req, res) => {
  const clients = await deleteAllclients();

  res.json({ ok: true, clients: clients });
});

router.post('/signup', async (req, res) => {
  const client = req.body;
  try {
    await save(client);

    const doc = await getclientByEmailAndPassword(client);
    req.session.client = { _id: doc._id };
    await req.session.save();

    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.json({ ok: false });
  }
});

router.post('/login', async (req, res) => {
  const client = req.body;
  const doc = await getclientByEmailAndPassword(client);

  if (doc) {
    req.session.client = { _id: doc._id };
    await req.session.save();
    res.json({ ok: true });
  } else {
    res.json({ ok: false });
  }
});

router.get('/logout', async (req, res) => {
  const domain =
    process.env.NODE_ENV === 'development ' ? process.env.DEV_HOST : process.env.PROD_HOST;

  req.session.destroy();
  res.clearCookie('connect.sid', { path: '/' });

  res.redirect(domain);
});

router.post('/check/auth', async (req, res) => {
  if (!req.session.client) {
    res.json({ ok: false }).end();
    return;
  }

  const _id = req.session.client._id;

  const client = await getclientById(_id);

  if (client) {
    res.json({ ok: true, role: client.role });
  } else {
    res.json({ ok: false });
  }
});

router.post('/update', async (req, res) => {
  if (!req.session.client) {
    res.json({ ok: false }).end();
    return;
  }

  const _id = req.session.client._id;

  const client = await getclientById(_id);

  const updatedclient = await updateclient(req.body);

  if (client) {
    res.json({ ok: true });
  } else {
    res.json({ ok: false });
  }
});

router.post('/updatePassword', async (req, res) => {
  if (!req.session.client) {
    res.json({ ok: false }).end();
    return;
  }

  const _id = req.session.client._id;

  const client = await getclientById(_id);

  const updatedclient = await updateclientPassword(req.body);

  if (client) {
    res.json({ ok: true });
  } else {
    res.json({ ok: false });
  }
});

module.exports = router;
