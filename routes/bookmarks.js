const router   = require('express').Router()
const Bookmark = require('../models/Bookmark')
const auth     = require('../middleware/authMiddleware')

// GET /bookmarks
router.get('/', auth, async (req, res) => {
  const bookmarks = await Bookmark.find({ userId: req.user.id })
  res.json(bookmarks)
})

// POST /bookmarks
router.post('/', auth, async (req, res) => {
  const bookmark = await Bookmark.create({ userId: req.user.id, templateId: req.body.templateId })
  res.status(201).json(bookmark)
})

// DELETE /bookmarks/:id
router.delete('/:id', auth, async (req, res) => {
  await Bookmark.findByIdAndDelete(req.params.id)
  res.json({ message: 'Bookmark removed' })
})

module.exports = router