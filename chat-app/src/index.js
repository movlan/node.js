const express = require("express");
const path = require("path");
const http = require("http");
const scoketio = require("socket.io");
const Filter = require("bad-words");
const { generateMessage } = require("./utils/messages");
const {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
} = require("./utils/users");

const app = express();
const server = http.createServer(app);
const io = scoketio(server);

const port = process.env.PROT || 3000;
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

io.on("connection", (socket) => {
  console.log("New socket connection");

  socket.on("join", (options, cb) => {
    const { error, user } = addUser({ id: socket.id, ...options });

    if (error) {
      return cb(error);
    }

    socket.join(user.room);

    socket.emit("message", generateMessage("System", "Welcome"));
    socket.broadcast
      .to(user.room)
      .emit(
        "message",
        generateMessage("System", `${user.username} has joined`)
      );

    cb();
  });

  socket.on("sendMessage", (message, cb) => {
    const user = getUser(socket.id);
    const filleter = new Filter();

    if (filleter.isProfane(message)) {
      return cb("Profanity is not allowed!");
    }

    io.to(user.room).emit("message", generateMessage(user.username, message));
    cb();
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit(
        "message",
        generateMessage(user.username, `${user.username} has left`)
      );
    }
  });

  socket.on("sendLocation", (cords, cb) => {
    const user = getUser(socket.id);

    io.to(user.room).emit(
      "locationMessage",
      generateMessage(
        user.username,
        `https://google.com/maps?q=${cords.lat},${cords.lng}`
      ),
      cb()
    );
  });
});

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
