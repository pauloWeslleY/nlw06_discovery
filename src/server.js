const express = require('express');
const path = require('path');

const route = require('./router/routes');

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(route);
server.use(express.static('public'));

server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

server.listen(3000, () => {
   console.log('Running!');
})