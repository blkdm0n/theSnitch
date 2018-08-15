'use strict';
const express = require('express');
const router = express.Router();
const ProfileController = require('../controllers').Profiles;

router.route('/')
  .get(ProfileController.getAll)
  .post((req, res) => {
    ProfileController.create
});

router.route('/:id')
  .get(ProfileController.getOne)
  .put(ProfileController.update)
  .delete((req, res) => {
    ProfileController.deleteOne
  });

module.exports = router;


//uncommented and add (req, res) => {} to both .post() and .delete()
