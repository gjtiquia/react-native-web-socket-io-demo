// NodeJS TypeScript setup Reference: https://fireship.io/lessons/typescript-nodejs-setup/

import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";

import { DEV_IP, DEV_PORT } from "../devConfig.js"

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "*" // Allows from all sources. In production should not do this.
    }
});

// CORS middlware, this allows any url from any origin to access the server (especially in development react localhost to express localhost)
// Note: This middleware is only for the express api endpoints. Need to configure cors for socket.io again separately.
app.use(cors());

// For testing connection
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
if (process.env.PORT) {
    // Production: use localhost and the given port from the production environment
    httpServer.listen(process.env.PORT, () => console.log(`Server now live at http://localhost:${process.env.PORT}`))
}
else {
    httpServer.listen(DEV_PORT, DEV_IP, () => console.log(`Server now live at http://${DEV_IP}:${DEV_PORT}`))
}

