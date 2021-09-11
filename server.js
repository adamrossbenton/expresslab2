const express = require("express")
const app = express()

const port = 3000

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

app.get('/greeting/:name', (req,res) => {
    res.send(`oh hi ${req.params.name}`)
})