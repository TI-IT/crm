const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Route index');
});

router.get('/yougile', (req, res) => {
  fetch('https://yougile.com/api-v2/users', {
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
        console.log(data);
      }
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;
