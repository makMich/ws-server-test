const http = require('http');
const WebSocket = require('ws');
const express = require('express');


const app = express();

app.get("/", function(req, res) {
    res.send("<h1>Hi Johny</h1>");
});

app.get("/about", function(req, res) {
    res.send("<h1>About</h1>");
})

app.listen(3012);

