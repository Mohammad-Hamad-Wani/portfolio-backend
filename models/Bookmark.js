const mongoose = require('mongoose')

const BookmarkSchema = new mongoose.Schema({
  userId:     { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  templateId: { type: String, required: true },
  savedAt:    { type: Date, default: Date.now }
})

module.exports = mongoose.model('Bookmark', BookmarkSchema)