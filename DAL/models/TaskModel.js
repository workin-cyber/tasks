const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    id: {
        type: String,
        unique: true
    },
    text: {
        type: String,
        required: true,
        minlength: 2,
        trim: true,
    },
    done: Boolean
})

module.exports = mongoose.model('todo', schema)
