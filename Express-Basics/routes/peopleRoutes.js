const express = require('express');
const router = express.Router();

const {
  getPeople,
  updatePerson,
  createPostmanPerson,
  createPerson,
  deletePerson,
} = require('../controllers/people.controller.js');

let { people } = require('../data');

router.get('/', getPeople);

router.post('/', createPerson);

router.post('/postman', createPostmanPerson);

router.put('/:id', updatePerson);

router.delete('/:id', deletePerson);

module.exports = router;
