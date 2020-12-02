var express = require('express');
var router = express.Router();
var MongoClient=require('mongodb').MongoClient

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/submit',function(req,res){
  
  MongoClient.connect('mongodb://localhost:27017',function(err,client){
    if(err)
    {
      console.log('error')
    }
    else
    {
    client.db('amritha').collection('user1').insertOne(req.body)
    }
  })
  res.send('got it')
})

module.exports = router;
