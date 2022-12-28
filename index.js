const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
require('dotenv').config();

const PORT = process.env.PORT;

const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

server.listen(PORT, () => {
    console.log("server is running", PORT);
})
