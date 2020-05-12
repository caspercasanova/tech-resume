const express = require('express');const http = require('http');const path = require('path');

let app = express();
const server = http.createServer(app);
const port = process.env.PORT || '8080';


app.set('port', port);

app.use(express.static(path.join(__dirname, 'build')));

server.listen(port, () => console.log(`Running on localhost:${port}`));