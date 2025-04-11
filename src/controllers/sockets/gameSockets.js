// sockets/gameSocket.js
module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    socket.on("lock-rectangle", (data) => {
      // Broadcast to all other clients
      socket.broadcast.emit("rectangle-locked", data);
    });

    socket.on("win", (data) => {
      io.emit("game-won", data);
    });

    socket.on("reset", () => {
      io.emit("board-reset");
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
};
