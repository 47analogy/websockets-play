const socket = io("http://localhost:5000");

socket.on("getting-message-from-server", function(msg) {
	document.querySelector("#message").innerHTML = msg;
});

socket.emit("sending-messagae-to-server", "Can you hear me Thomas?");
