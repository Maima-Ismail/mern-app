const mongoose = require('mongoose')
const db = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://maimamirza:admin@cluster0.ggjwj3g.mongodb.net/NODE-API?retryWrites=true&w=majority'
    )
    console.log('Connected to MongoDB')
  } catch (error) {
    console.log(error)
  }
}

module.exports = db
