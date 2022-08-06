const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController');

router.get('/', protect, getGoals);

router.post('/', protect, setGoal);

// or what you can do is, but I don't like it as much
// router.route('/').get('/', getGoals).post('/', setGoal);

router.put('/:id', protect, updateGoal);

router.delete('/:id', protect, deleteGoal);

module.exports = router;
