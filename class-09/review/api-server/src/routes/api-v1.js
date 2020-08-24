'use strict';

const express = require('express');
const params = require('./params');

const router = express.Router();

router.param('model', params);

// Route Definitions
router.get('/:model', handleGetAll);
router.post('/:model', handlePost);
router.get('/:model/:id', handleGetOne);
router.put('/:model/:id', handlePut);
router.patch('/:model/:id', handlePatch);
router.delete('/:model/:id', handleDelete);


// Route Handlers
async function handleGetAll(req, res, next) {

  try {
    const results = await req.model.get();

    res.json({
      count: results.length,
      results,
    });

  } catch (err) {

    next(err);
  }
}

function handleGetOne(req, res, next) {

  let id = req.params.id;
  req.model
    .get(id)
    .then(record => res.json(record))
    .catch(next);
}

function handlePost(req, res, next) {
  req.model
    .post(req.body)
    .then(result => res.json(result))
    .catch(next);
}

function handlePut(req, res, next) {

  let id = req.params.id;

  req.model
    .put(id, req.body)
    .then(result => res.json(result))
    .catch(next);
}

function handlePatch(req, res, next) {

  let id = req.params.id;

  req.model
    .patch(id, req.body)
    .then(result => res.json(result))
    .catch(next);
}

async function handleDelete(req, res, next) {

  try {
    let id = req.params.id;

    const result = await req.model.delete(id);

    res.json(result);
  } catch (err) {

    next(err);
  }

}


module.exports = router;
