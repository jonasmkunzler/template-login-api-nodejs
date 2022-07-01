const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    profileImage: String,
},
{
    timestamps: true
})

const Model = mongoose.model('userLogin', schema)


module.exports = Model