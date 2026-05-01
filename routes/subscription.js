const router = require('express').Router()
const User   = require('../models/User')
const auth   = require('../middleware/authMiddleware')

// GET /subscription
router.get('/', auth, async (req, res) => {
  const user = await User.findById(req.user.id).select('subscription')
  res.json({ subscription: user.subscription })
})

// PATCH /subscription
router.patch('/', auth, async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.user.id,
    { subscription: req.body.plan },
    { new: true }
  ).select('subscription')
  res.json({ subscription: user.subscription })
})

module.exports = router