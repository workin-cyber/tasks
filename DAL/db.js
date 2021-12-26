const mongoose = require('mongoose')

const
    userName = 'workin',
    password = 'Workin1121',
    connectionString = `mongodb+srv://${userName}:${password}@cluster0.ho2ly.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

console.log('connecting ..')
mongoose.connect(connectionString)
    .then(() => {
        console.log('Mongo connected!')
    })
