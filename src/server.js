'use strict';

const httpPort = 3001;
const httpsPort = 3000;

const express = require('express');
const https = require('https');
const path = require('path');
const fs = require('fs');

let httpApp = express();
let httpsApp = express();

// Serve static files
httpsApp.use(express.static(path.join(__dirname, 'client'), {index: false, extensions: ['html']}));

// Home
httpsApp.get('/', (request, response, next) => {
    return response.sendFile(path.join(__dirname + '/client/index.html'));
})

// 404
httpsApp.use((request, response, next) => {
    response.status(404);
    response.send("<h1>404</h1><h3>Sorry! Page could not be found.</h3><a href='/'>Go home</a>");
    next();
});

// HTTPS certs
const httpsConfig = {
    key: fs.readFileSync('certs/privkey1.pem'),
    cert: fs.readFileSync('certs/fullchain1.pem')
}

// HTTPS server
https.createServer(httpsConfig, httpsApp).listen(httpsPort, () => {
    console.log("Started server on port " + httpsPort);
});

// HTTP redirects to HTTPS
httpApp.listen(httpPort, () => {
    console.log("Started redirect server on port " + httpPort);
});

httpApp.get('*', (request, response) => {
    response.redirect('https://' + request.headers.host + request.path);
})
