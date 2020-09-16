'use strict'
const express = require('express'),
    router = express.Router();
const rankingsModel = require('../models/rankings'),
    rankings = require('../models/rankingsCall');
const db = require('../models/conn');
( function () {
router.get('/', async (req, res) => {
    const languageRanking = await rankingsModel.getAll();
    const rankingList = await rankings.getRanking();
    console.log(languageRanking)
    console.log(rankingList)
    res.render('template', {
        locals:{
            title: 'Language Ranker',
            data: languageRanking,
            rankingData: rankingList
        },
        partials: {
            partial: 'partial'
        }
    });
});
})();
//const bodyParser = require('body-parser')

//router.use(bodyParser.urlencoded({extended:false}))
//router.use(bodyParser.json())

router.get('/template', (req, res)=>{
    res.sendFile("./template.html");
    console.log('doing')
});
const update = require('../models/postModel')

router.post('/', async (req, res) =>{
    const sendData = async (data)=>{
        try {
            for (let ranking in data) {
                await db.result(`UPDATE langauges SET ranking  = ${data[ranking]} WHERE language = '${ranking}'; `)
            }
        }
        catch (error) {
            return error.message;
        }
    }
    const ranned = await sendData(req.body)
    ranned;
    const redirected = await res.redirect('/')
    redirected;
})


module.exports = router;