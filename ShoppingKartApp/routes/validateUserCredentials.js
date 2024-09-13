var express = require('express');
var router = express.Router();
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

/*router.get('/', function(req, res, next) {
    var responseObj;
    req.query // get communication 
    if (req.query.accountId == "admin" && req.query.accountPassword == "Sample12") {
        responseObj = {msg: 'Valid details'};
        
    } else {
        responseObj = {msg: 'Invalid'};
    }
    res.send(JSON.stringify(responseObj));
    
});*/

router.post('/', function(req, res, next) {
    var responseObj;
    console.log(req.body);
    
    getDbConnection(req.body).then((result) => {
        if (result.length == 0) { // no data found
            responseObj = {msg: 'Invalid'};
        } else {
            responseObj = {msg: 'Valid details'};
        }
        res.send(JSON.stringify(responseObj));
    }).catch((err) =>{

    });       
});

async function getDbConnection(userData) {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db("HunterSite");
    const collection = db.collection('userAccountData');
 
    return collection.find(userData).toArray();
  }
module.exports = router;
