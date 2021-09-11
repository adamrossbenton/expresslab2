const express = require("express")
const app = express()

const port = 3000

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

app.get('/greeting/:name', (req,res) => {
    res.send(`oh hi ${req.params.name}`)
})

app.get('/tip/:total/:tipPercentage',(req,res) => {
    const tip = req.params.total * req.params.tipPercentage / 100
    res.send(`Your tip should be ${tip}`)
})