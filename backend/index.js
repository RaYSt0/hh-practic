const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send('Hello Express')
})

let port = 3001
app.listen(port, () => {
    console.log(`Server on: http://localhost:${port}`)
})