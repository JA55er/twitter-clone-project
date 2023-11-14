import { Server } from 'socket.io';

const socketSetup = (httpServer) => {
  const io = new Server(httpServer, {
    cors: { origin: 'http://localhost:5173' },
  });

  io.on('connection', (socket) => {
    console.log('User connected: ', socket.id);

    socket.on('new tweet', (tweet) => {
      console.log('tweet: ', tweet)
      socket.broadcast.emit('new tweet', tweet)
    });

    // Handle disconnection
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });
  return io;
};

export default socketSetup;
