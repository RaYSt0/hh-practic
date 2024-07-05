const express = require('express');
const router = express.Router();
const vacanciesController = require('./db/controler/control');

router.get('/vacancies', vacanciesController.fetchAndSaveVacancies);
router.get('/allVacancies', vacanciesController.retrieveVacancies);

module.exports = router;