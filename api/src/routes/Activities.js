const { Router } = require('express');
const { postActivity, getActivities, deleteActivity, editActivity} = require('../Controllers/Activity.controller.js');

const router = Router();

router.post('/', postActivity)
router.get('/', getActivities)
router.delete('/:name', deleteActivity)
router.put('/:id', editActivity)

module.exports = router