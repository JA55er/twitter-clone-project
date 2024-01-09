import io from 'socket.io-client';

let socket;

// const socket = io('http://localhost:8080')

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  socket = io('http://localhost:8080');
} else {
  socket = io('https://api-dot-twitter-6t.lm.r.appspot.com');
}

export default socket;
