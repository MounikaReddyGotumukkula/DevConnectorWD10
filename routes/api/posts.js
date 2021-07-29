const express = require('express');
const router = express.Router();

router.get('/testp', (req, res) => res.json({
  msg: 'post route works!'
}))

module.exports = router;