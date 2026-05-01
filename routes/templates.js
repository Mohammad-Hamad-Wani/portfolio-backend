const router   = require('express').Router()
const Template = require('../models/Template')

// GET /templates
router.get('/', async (req, res) => {
  const templates = await Template.find()
  res.json(templates)
})

module.exports = router