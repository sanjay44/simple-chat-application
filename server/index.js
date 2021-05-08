// import express from 'express';
// import { Server } from 'socket.io';

// const app = express();

// const SERVER_PORT = process.env.SERVER_PORT || 8080;

// // app.get('/', (req, res) => {
// //   res.send('<h1>Hello Node.js</h1>');
// // });

// const server = app.listen(SERVER_PORT, () => {
//   console.log(`App started on port ${SERVER_PORT}`);
// });

// const io = new Server(server, () => {
//   console.log('socket io server created');
// });

// io.on('connection', (socket) => {
//   console.log('A user joined');
// });

import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();

const server = createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.send('Welcome');
});

io.on('connection', (socket) => {
  console.log('A user joined');
});

server.listen(8080, () => {
  console.log('App started at 8080');
});
