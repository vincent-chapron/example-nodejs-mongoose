const http = require('http')

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const routes = require('./routes')

const app = express()
const server = http.createServer(app)

mongoose.connect('mongodb://mongo/formation')
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(routes)

server.listen(3000)
