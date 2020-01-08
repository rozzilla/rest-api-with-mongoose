const logger = require('morgan')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const errorhandler = require('errorhandler')

let app = express()
app.use(logger('dev'))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/mongoose-rest-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const Account = mongoose.model('Account', {
  name: String,
  balance: Number
})

function returnData(response, error, data) {
  if (error) return next(error)
  response.send(data)
}

app.get('/accounts', (req, res, next) => {
  if (!req.body) return res.sendStatus(400)
    
  Account.find((error, Account) => {
    returnData(res, error, Account)
  })
})

app.post('/accounts', (req, res, next) => {
  Account.create(req.body, (error, Account) => {
    returnData(res, error, Account)
  })
})

app.put('/accounts/:id', (req, res, next) => {
  Account.updateOne({ _id: req.params.id }, { $set: req.body }, (error, Account) => {
    returnData(res, error, Account)
  })
})

app.delete('/accounts/:id', (req, res, next) => {
  Account.deleteOne({ _id: req.params.id }, function (error, Account) {
    returnData(res, error, Account)
  })
})

app.use(errorhandler())
app.listen(3000)
