'use strict'
// init project
var express = require('express');
var app = express();
var http = require('http');

app.get("/", function (req, res) {

    let ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress.split(":").pop()

    let language = req.headers['accept-language'].split(',')[0]

    let osString = req.headers['user-agent']
    let os = osString.match(/\(([^\)]+)\)/)[0].replace(/[\(|\)]+/g, '')
    console.log('os' + os)

    let headers = req.headers


    let json = {
        "ipaddress": ip,
        "language": language,
        "software": os
    }


    res.send(JSON.stringify(json))
});


// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});
