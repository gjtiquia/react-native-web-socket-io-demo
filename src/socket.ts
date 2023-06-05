import { io } from "socket.io-client";
import { HOST_IP, HOST_PORT } from "server/devConfig"

const DEVELOPMENT_HOSTNAME = HOST_IP;
const PRODUCTION_HOSTNAME = "some-production-hostname";
const HOSTNAME = process.env.NODE_ENV === "production" ? PRODUCTION_HOSTNAME : DEVELOPMENT_HOSTNAME;

const DEVELOPMENT_PORT = HOST_PORT;
const PRODUCTION_PORT = "some-production-port";
const PORT = process.env.NODE_ENV === "production" ? PRODUCTION_PORT : DEVELOPMENT_PORT;

const URL = `http://${HOSTNAME}:${PORT}`;

console.log("process.env.NODE_ENV:", process.env.NODE_ENV)
console.log("Socket URL:", URL);

export const socket = io(URL);