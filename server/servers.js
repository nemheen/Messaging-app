
const bodyParser = require('body-parser');
const express = require('express');
const socketIo = require('socket.io');
const http = require('http');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);


app.use(express.static('public'));
require('dotenv').config();

app.use(cors({
    origin: 'http://localhost:5000',
    credentials: true

}));

io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('sendMessage', (message) => {
        console.log('Message received on server: ', message);
        io.emit('message', message); //broadcast the msg to all clients
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
}   );

//Middleware
app.use(bodyParser.json());


//Routes
const authRoutes = require('./routes/auth');



const port = process.env.PORT || 5000;

//Start server
app.listen(port, () => { 
    console.log(`Server is running on port: ${port}`);
});
