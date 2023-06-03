// NodeJS TypeScript setup Reference: https://fireship.io/lessons/typescript-nodejs-setup/

import express from "express";
import os from "os";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";

// Gets all the remote IPs for the server machine. Gets the same value as Expo's development server.
// Reference: https://github.com/FredKSchott/snowpack/discussions/2011
const remoteIps = Object.values(os.networkInterfaces())
    .reduce((every: os.NetworkInterfaceInfo[], i) => [...every, ...(i || [])], [])
    .filter((i) => i.family === 'IPv4' && i.internal === false)
    .map((i) => i.address);

// console.log(os.networkInterfaces());
console.log("Remote IPs", remoteIps);

const FALLBACK_IP = "0.0.0.0"; // Setting to 0.0.0.0 allows to listen to computer ip or all network interfaces of the computer. Ref: https://stackoverflow.com/questions/21263021/connect-to-another-computer-using-ip-address?rq=4
const HOST_IP: string = remoteIps.length > 0 ? remoteIps[0] : FALLBACK_IP;
const PORT = 8080; // Arbitrary port

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "*" // Allows from all sources. In production should not do this.
    }
});

console.log(`Host IP: ${HOST_IP}`);

// Note: This middleware is only for the express api endpoints. Need to configure cors for socket io again separately.
app.use(cors()); // CORS middlware, this allows any url from any origin to access the server (especially in development localhost to localhost)

// Connect to http://${HOST_IP}:${PORT} on any device on the same local network, should be able to check this (works on MacOS 10.15.7)
app.get('/', (req, res) => {
    res.status(200).send({ message: "hello world!" });
});

let count = 0;
const incrementCount = () => {
    count++;
    console.log(`Incremented Count: ${count}`);
}

io.on("connection", (socket) => {
    console.log(`A user connected. Socket ID: ${socket.id}`);

    // socket.emit => only emit on the socket
    // Initialize the current count on client side
    socket.emit("serverResponse", count);

    socket.on("clickMeEvent", () => {
        incrementCount();

        // io.emit => Emit to everyone
        io.emit("serverResponse", count);
    });
});

// Convention to start listening after setting up the internal routes
// Note: app.listen() does not work as it creates a new HTTP server. Reference: https://socket.io/docs/v4/server-initialization/#with-express
httpServer.listen(PORT, HOST_IP, () => console.log(`Server now live at http://${HOST_IP}:${PORT}`))
