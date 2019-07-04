const express = require('express')
const app = express()
const port = process.env.PORT || 3001;
const path = require('path');
const db = require('./db');

db.connect().then(dbo => {
    app.get('/rest/shows', (req, res) => {
        dbo.collection('shows').find({}).toArray(function(err, result) {
            if (err) throw err; 
            res.send(result);
        });
    });

// Serve any static files
app.use(express.static(path.join(__dirname, '../../build')));

// Handle React routing, return all requests to React App
app.get('*', function(req,res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

});
