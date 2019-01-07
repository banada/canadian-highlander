'use strict';

const httpPort = 3001;
const httpsPort = 3000;

const express = require('express');
const path = require('path');
const fs = require('fs');

let httpApp = express();

// Serve static files
httpApp.use(express.static(path.join(__dirname, 'client'), {index: false, extensions: ['html']}));

// Home
httpApp.get('/', (request, response, next) => {
    return response.sendFile(path.join(__dirname + '/client/index.html'));
})

// 404
httpApp.use((request, response, next) => {
    response.status(404);
    response.send("<h1>404</h1><h3>Sorry! Page could not be found.</h3><a href='/'>Go home</a>");
    next();
});

httpApp.listen(httpPort, () => {
    console.log("Started server on port " + httpPort);
});
