const express = require('express');

const path = require('path');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

module.exports.io = io
require('./sockets/socket')

app.use(express.static(publicPath));

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${port}`);

});