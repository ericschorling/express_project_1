const express = require('express'),
    es6Renderer = require('express-es6-template-engine'),
    pg_promies = require('pg-promise'),
    hostname = '127.0.0.1',
    port = 3333,
    http = require ('http'),
    app = express()

app.engine('html', es6Renderer)
app.set('views', './views')
app.set('view engine', 'html')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const server = http.createServer(app)
server.listen(port, hostname, ()=>{
    console.log(`I'm listenting here ${hostname}:${port}`)
})

const rootController = require('./routes/index')

app.use('/', rootController)