const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    res.render('template', {
        locals:{
            title: 'Language Ranker'
        },
        partials: {
            partial: 'partial'
        }
    });
});

module.exports = router;