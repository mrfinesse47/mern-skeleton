const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status.json({ message: 'hi' });
});

module.exports = router;
