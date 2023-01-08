const express = require('express');
const {
  save,
  getAllTasks,
  deleteAllTasks,
  getTaskByEmailAndPassword,
  getTaskById,
  updateTask,
  updateTaskPassword,
  writeTasks,
} = require('../../services/taskService/tasks.service.js');

const router = express.Router();

router.get('/getalltasks', (req, res) => {
  fetch('https://yougile.com/api-v2/tasks', {
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
        writeTasks(data.content);
        res.json({ ok: true, tasks: data.content });
      }
    })
    .catch((err) => {
      console.error(err);
    });
});

router.get('/alltasks', (req, res) => {
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
        res.json({ ok: true, tasks: data.content });
      }
    })
    .catch((err) => {
      console.error(err);
    });
});

router.get('/me', async (req, res) => {
  const _id = req.session.task._id;

  const task = await gettaskById(_id);

  res.json({ ok: true, task: task });
});

router.get('/get/all', async (req, res) => {
  const tasks = await getAllTasks();

  res.json({ ok: true, tasks: tasks });
});

router.get('/delete/all', async (req, res) => {
  const tasks = await deleteAllTasks();

  res.json({ ok: true, tasks: tasks });
});

router.post('/signup', async (req, res) => {
  const task = req.body;
  try {
    await save(task);
    const doc = await getTaskByEmailAndPassword(task);
    req.session.task = { _id: doc._id };
    await req.session.save();

    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.json({ ok: false });
  }
});

router.post('/login', async (req, res) => {
  const task = req.body;
  const doc = await getTaskByEmailAndPassword(task);

  if (doc) {
    req.session.task = { _id: doc._id };
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
  if (!req.session.task) {
    res.json({ ok: false }).end();
    return;
  }

  const _id = req.session.task._id;

  const task = await getTaskById(_id);

  if (task) {
    res.json({ ok: true, role: task.role });
  } else {
    res.json({ ok: false });
  }
});

router.post('/update', async (req, res) => {
  if (!req.session.task) {
    res.json({ ok: false }).end();
    return;
  }

  const _id = req.session.task._id;

  const task = await getTaskById(_id);

  const updatedtask = await updateTask(req.body);

  if (task) {
    res.json({ ok: true });
  } else {
    res.json({ ok: false });
  }
});

router.post('/updatePassword', async (req, res) => {
  if (!req.session.task) {
    res.json({ ok: false }).end();
    return;
  }

  const _id = req.session.task._id;

  const task = await getTaskById(_id);

  const updatedtask = await updateTaskPassword(req.body);

  if (task) {
    res.json({ ok: true });
  } else {
    res.json({ ok: false });
  }
});

module.exports = router;
