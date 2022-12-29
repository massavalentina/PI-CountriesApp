const { Router } = require('express');
const { getCountries, getCountryById } = require('../Controllers/Country.controller.js');

const router = Router();

router.get('/', getCountries);
router.get('/:id', getCountryById);

module.exports = router;