import express from 'express'

const app = express()

app.get('/hello', (req, res) => {
  res.send('zupdatowany mesecz')
})

app.listen(3000, () => {
  console.log("listening...")
})