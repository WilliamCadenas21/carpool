import socketIO from 'socket.io-client';

//const url = 'http://localhost:3000';
//const url = 'http://192.168.0.18:3000';
const url = 'https://carpool-back.herokuapp.com';

const io = socketIO(url);

export { io }; 
