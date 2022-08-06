const mongoose = require('mongoose');

const goalScheema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    text: { type: String, required: [true, 'please add a message'] },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Goal', goalScheema);
