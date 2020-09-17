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

router.get('/template', (req, res)=>{
    res.sendFile("./template.html");
    console.log('doing')
});
const update = require('../models/postModel')

router.post('/', async (req, res) =>{
    const sendData = async (data)=>{
        if (data.reset === 'reset'){
            const languageRanking = await rankingsModel.getAll();
            for (let theLanguage of languageRanking){
                await db.result(`UPDATE langauges SET ranking = 6 WHERE language = $1`, [theLanguage.language])
            }
        } 
        else {
            try {
                for (let ranking in data) {
                    ranking !== 'reset' ? await db.result(`UPDATE langauges SET ranking  = $1 WHERE language = $2;`, [Number(data[ranking]),ranking]) : 0
                }
            }
            catch (error) {
                return error.message;
            }
        }
    }
    const sendBody = await sendData(req.body)
    sendBody;
    const redirected = await res.redirect('/')
    redirected;
})


module.exports = router;