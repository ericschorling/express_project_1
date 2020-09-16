

const express = require('express'),
    bodyParser = require('body-parser'),
    app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/template', (req, res)=>{
    res.sendFile(_dirname + "/" +"template.html");
    console.log('doing')
});

app.post('/update', (req, res) =>{
    response = {
        HTML_ranking : req.body.HTML_ranking,
        CSS_ranking: req.body.CSS_ranking,
        Javascript_ranking: req.body.Javascript_ranking,
        Node_ranking: req.body.Node_ranking,
        PostgreSQL_ranking: req.body.Node_ranking
    }
    console.log(JSON.stringify(response))
    res.end(JSON.stringify(response))
})
