const express = require('express');
const app = express();

app.get('/name', function(req, res){
    res.send("Aya Grami")
})

app.listen(3500)