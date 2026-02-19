const express = require('express')
const app = express()
const AuthRoutes = require('./routes/auth.routes')

app.use("/app", AuthRoutes)

module.exports = app;