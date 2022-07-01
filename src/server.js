require('dotenv').config()

const express = require('express')
const path = require('path')
const routes = require('./routes')
const cors = require('cors')
const db = require('./database/db.js')
const app = express()

app.use(cors({ credentials: true, origin: "http://localhost:3000" }))

db.connect()

app.use(express.json()) //faz o express aceitar retorno em JSON
app.use(express.urlencoded({ extended: true }))

app.use('/', routes)

const port = process.env.PORT || 5001
const host = process.env.HOST || '0.0.0.0'
app.listen(port, host, () => console.log(`Server ${host} rodando na porta ${port}`))