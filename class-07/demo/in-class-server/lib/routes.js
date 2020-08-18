const express = require('express');
const router = express.Router();

router.get('/fruit', (req, res) => {
  let output = {
    type: req.query.type || 'unknown',
  };
  res.status(200).json(output);
});

router.get('/fruit/apple', (req, res) => {
  res.status(200).send("I Love Apples SO MUCH!");
});

router.get('/fruit/:type', (req, res) => {
  let output = {
    type: req.params.type,
  };
  res.status(200).json(output);
});

// body undefined?
router.post('/fruit', (req, res) => {
  console.log('What got added?', req.body);
  res.status(201).send('ok');
});

router.get('/fruit-browser', (req, res) => {
    console.log('browser = ', req.browser);
  res.status(200).send('ok');
});

module.exports = router;

