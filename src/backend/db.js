//CRUD create read update delete

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert'); //Assert is an inbuilt module in node.js used to perform unit tests on node.js expressions. If test fails, error raised.

const db = {
    host: 'localhost',
    port: '27017',
    name: 'kodflix',
    user: 'kodflix',
    pwd: 'kodflix',
};

//mongodb://$[username]:$[password]@$[hostlist]/$[database]?authSource=$[authSource]
const url = `mongodb://${db.user}:${db.pwd}@${db.host}:${db.port}/${db.name}`;


//MongoClient is a constructor
//.connect is to connect to MongoDB using url documented

//callback function. Called after executing method. 
//First parameter contains error object if an error occured, or null otherwise
//Second parameter will contain the initialized db object or null if an error occured


function connect() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function(err, client) {
            assert.equal(null, err);        //assert tests to see if the error from the callback function is equal to null. If its equal to null, test passed 
            console.log('Connected successfully to server');
            const dbo = client.db(db.name);  //use database called "kodflix" for this operation
            resolve(dbo);
        });
    });
}

module.exports = { connect };