const mongoose = require('mongoose')
const db = async () => {
  return mongoose.connect(
    'mongodb+srv://maimamirza:admin@cluster0.ggjwj3g.mongodb.net/NODE-API?retryWrites=true&w=majority'
  )
}

module.exports = db
