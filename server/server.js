const app = require("express")()
const httpServer = require("http").createServer(app);
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');
const io = require("socket.io")(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    }
});
const PORT = 5000;

io.on("connect", (socket) => {
    console.log("Someone connected and socket id " + socket.id);

    socket.on('join', ({ name, room}, callback) => {
        const {error, user} = addUser({ id: socket.id, name, room})

        if(error) return callback(error);
        socket.join(user.room);

        socket.emit('message', { user: 'admin', text: `${user.name}, Welcome to the room ${user.room}`});

        socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name} has joined the chatroom`})
        io.to(user.room).emit('roomData', {room: user.room, users: getUsersInRoom(user.room)});
        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', { user: user.name, text: message });

        callback();
    })

    socket.on("disconnect", () => {
        console.log(`${socket.id} disconnected`);
        const user = removeUser(socket.id);
        if(user)
        {
            io.to(user.room).emit('message', {user: 'Admin', text: `${user.name} has left the chatroom!`});
            io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
        }
    })
});


httpServer.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});