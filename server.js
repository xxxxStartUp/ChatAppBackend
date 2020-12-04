const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const setUser = require("./app/middleware/setCurrentUser");
const isLoggedIn = require("./app/middleware/isAuthenticated");
const fs = require('fs');
//Set static folder 
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(setUser);

// Render a landing server page
app.get('/', (req, res) => {
    fs.readFile(__dirname + '/public/views/index.html', 'utf8', (err, text) => {
        res.send(text);
    });
});
// This should return unauthorized because the setUser middleware created no object of user in the request stack
app.get("/users", isLoggedIn, function(req, res) {
    // get users...
  });
//Run when client connects
io.on('connection', socket=>{

})
const PORT = 3000 || process.env.PORT;

server.listen(PORT, ()=>{console.log(`Server running on port ${PORT}`)});

