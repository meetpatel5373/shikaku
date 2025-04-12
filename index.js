const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const mongoose = require("mongoose");
const logger = require("./src/middleware/logger");
const path = require("path");
const avenue = require("./config/alley/avenue");
const cors = require("cors");
const app = express();
const server = http.createServer(app);
const io = new Server(server);
require("dotenv").config();
process.on("uncaughtException", (err) => {
  console.error(`Caught exception: ${err}`);
});

process.on("unhandledRejection", (reason, p) => {
  console.error("Unhandled Rejection at:", p, "reason:", reason);
});

// Middleware
app.use(express.json());
app.use(logger);
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(cors());

// Add headers before the routes are defined
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

// Routes
app.use("/board", avenue.boardRoutes);

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

// Socket setup
require("./src/controllers/sockets/gameSockets")(io);

app.use(express.static("public"));

// DB and Server Init
const PORT = process.env.PORT || 3000;
mongoose
  .connect(process.env.CONNECT_URL)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));
