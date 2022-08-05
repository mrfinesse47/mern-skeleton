const express = require('express');
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController');

router.get('/', getGoals);

router.post('/', setGoal);

// or what you can do is, but I don't like it as much
// router.route('/').get('/', getGoals).post('/', setGoal);

router.put('/:id', updateGoal);

router.delete('/:id', deleteGoal);

module.exports = router;
