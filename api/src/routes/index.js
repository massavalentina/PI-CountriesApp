const { Router } = require('express');
const Countries = require('./Countries');
const Activities = require('./Activities');

const router = Router();

router.use('/countries', Countries);
router.use('/activities', Activities);

module.exports = router;