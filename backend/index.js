const express = require('express')
const app = express()

require('./db')

app.get('/', (req, res) => {
    res.send('Hello Express')
})

const apiRoute = require('./api');

app.use('/api/', apiRoute);

let port = 3001
app.listen(port, () => {
    console.log(`Server on: http://localhost:${port}`)
})