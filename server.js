const express = require("express")
const app = express()

const port = 3000

const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
]

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

app.get('/magic/:question',(req,res) => {
    const getResponse = responses[Math.floor(Math.random()*responses.length)]
    res.send(`My response: ${getResponse}`)
})

// Fibonacci
// Source for Fibonacci formula (NOT code, just formula):
// https://www.geeksforgeeks.org/check-number-fibonacci-number/
// n = F if (5n^2 + 4) || (5n^2 - 4) = perfect square

app.get('/fibonacci/:num', (req,res) => {
    let n = req.params.num
    let npos = Math.sqrt(5*(n**2) + 4)
    let nneg = Math.sqrt(5*(n**2) - 4)
    if (Number.isInteger(npos) || Number.isInteger(nneg)) {
        res.send("Very good. It is Fibonacci")
    } else {
        res.send("I can tell this is not a Fibonacci number.")
    }
})