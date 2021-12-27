const express = require('express')
const app = express()

app.use(require('cors')())
app.use(express.json())

require('./router')(app)

const PORT = 3030
app.listen(PORT, () => console.log(`Server is running: ${PORT}`))