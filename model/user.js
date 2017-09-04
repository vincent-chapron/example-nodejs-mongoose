const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {type: String, default: 'John Doe', index: true},
    age: {type: Number, min: 13},
})

const User = mongoose.model('User', UserSchema)

module.exports = {User, UserSchema}
