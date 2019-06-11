const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const server = express()
const userRouter = require('./routes/userRoutes')

server.use(express.json())
server.use(helmet())
server.use(cors())

// Routes
server.use('/api', userRouter);

server.get('/', (req, res) => {
    res.send('Serever running')
})


module.exports = server;