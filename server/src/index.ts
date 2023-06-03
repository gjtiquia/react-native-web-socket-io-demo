// NodeJS TypeScript setup Reference: https://fireship.io/lessons/typescript-nodejs-setup/

import express from "express";
import os from "os";
import cors from "cors";

const HOST_IP = "0.0.0.0"; // Setting to 0.0.0.0 allows to listen to  computer ip or all network interfaces of the computer. Ref: https://stackoverflow.com/questions/21263021/connect-to-another-computer-using-ip-address?rq=4
const HOSTNAME = os.hostname();
const PORT = 8080; // Arbitrary port

console.log(`Hostname: ${HOSTNAME}`);

const app = express();
app.use(cors()); // CORS middlware, this allows any url from any origin to access the server (especially in development localhost to localhost)

// Connect to http://${HOSTNAME}:${PORT} on any device on the same local network, should be able to check this (works on MacOS 10.15.7)
app.get('/', (req, res) => {
    res.status(200).send({ hello: "world" });
});

// Convention to start listening after setting up the internal routes
app.listen(PORT, HOST_IP, () => console.log(`Server now live at http://${HOSTNAME}:${PORT}`))
