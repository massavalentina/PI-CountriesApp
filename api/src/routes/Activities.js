const { Router } = require('express');
const { postActivity, getActivities, deleteActivity } = require('../Controllers/Activity.controller.js');

const router = Router();

router.post('/', postActivity)
router.get('/', getActivities)
router.delete('/:id', deleteActivity)

module.exports = router