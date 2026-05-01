const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

// Routes
app.use('/auth',         require('./routes/auth'))
app.use('/templates',    require('./routes/templates'))
app.use('/bookmarks',    require('./routes/bookmarks'))
app.use('/subscription', require('./routes/subscription'))

// Health check
app.get('/', (req, res) => res.send('Portfolio Builder API running'))

// Connect to MongoDB then start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected')
    app.listen(process.env.PORT || 5000, () =>
      console.log(`Server running on port ${process.env.PORT || 5000}`)
    )
  })
  .catch(err => console.error('MongoDB connection error:', err))

 