const asyncHandler = require('express-async-handler');
const Goal = require('../model/goalModel');
const User = require('../model/userModel');

// @desc  Get goals
// @route GET /api/goals
// @access Private

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  //normally there is a try catch block here but async handler handles it
  res.status(200).json(goals);
});
// @desc  Set goals
// @route POST /api/goals
// @access Private

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('please add a text field'); //error middleware handles this
  }
  const goal = await Goal.create({ text: req.body.text, user: req.user.id });
  res.status(200).json({ goal });
});
// @desc  Update goals
// @route PUT /api/goals/:id
// @access Private

const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error('goal not found');
  }

  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('user not found');
  }

  //make sure the logged in user  matches the goal user
  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error('user not authorized');
  }
  const updatedGoal = await Goal.findByIdAndUpdate(
    req.params.id,
    { text: req.body.text },
    { new: true } //creates if it doesnt exist
  );
  res.status(200).json({ updatedGoal });
});
// @desc  Delete goals
// @route DELETE /api/goals/:id
// @access Private

const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error('goal not found');
  }

  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('user not found');
  }

  //make sure the logged in user  matches the goal user
  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error('user not authorized');
  }
  await Goal.findOneAndDelete(req.params.id);
  console.log(deleteGoal);
  res.status(200).json({ message: `deleted goal ${req.params.id}` });
});

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
