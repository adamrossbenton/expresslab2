const express = require("express")
const app = express()

app.listen(3000, () => {
    console.log("listening on port 3000")
})

app.get('/greeting/:name', (req,res) => {
    res.send(`oh hi ${req.params.name}`)
})