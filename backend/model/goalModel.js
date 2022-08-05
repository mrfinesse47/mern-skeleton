const mongoose = require('mongoose');

const goalScheema = mongoose.Schema(
  {
    text: { type: String, required: [true, 'please add a message'] },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Goal', goalScheema);
