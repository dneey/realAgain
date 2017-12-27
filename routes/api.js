const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

router.get('/ninjas', function (req, res) {
    console.log(req.body);
    res.send({ type : 'GET' });
});

router.post('/ninjas', function (req, res) {
    // var ninja = new Ninja(req.body);
  
    // ninja.save();

    /* res.send({
         type: 'POST',
         name: req.body.name,
         rank: req.body.rank
    });*/ 
    
    // or 
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja)
    });
   
    
});

router.put('/ninjas/:id', function (req, res) {
    console.log('Root');
    res.send({ type: 'PUT' });
});

router.delete('/ninjas/:id', function (req, res) {
    console.log('Root');
    res.send({ type: 'DELETE' });
});

module.exports = router;