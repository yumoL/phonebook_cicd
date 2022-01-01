const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
mongoose.set('useFindAndModify', false)

const url = process.env.NODE_ENV === 'test' ? process.env.MONGODB_TEST_URL : process.env.MONGODB_URL

console.log('connecting to ', url)

mongoose.connect(url, { useNewUrlParser: true })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB', error.message)
  })

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    unique: true
  },
  number: {
    type: String,
    minlength: 8
  }
})
personSchema.plugin(uniqueValidator)

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})
module.exports = mongoose.model('Person', personSchema)