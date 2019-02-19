const express = require("express");
// const cors = require("cors");
const app = express();
const server = app.listen(5000, console.log("socket server is connected"));
const io = require("socket.io")(server);

// app.use(cors());

io.on("connection", socket => {
	//console.log("Client connected!");
	socket.on("getting-message-from-client", msg => {
		console.log(msg);
	});
	socket.emit("sending-message-to-client", "I can hear you Watson!");
});
