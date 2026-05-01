const mongoose = require('mongoose')

const TemplateSchema = new mongoose.Schema({
  name:     { type: String, required: true },
  category: { type: String },
  tier:     { type: String, enum: ['free','premium'], default: 'free' },
  htmlFile: { type: String },
})

module.exports = mongoose.model('Template', TemplateSchema)