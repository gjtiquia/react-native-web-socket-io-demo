import { io } from "socket.io-client";

// TODO : Production and Development should have different handling
// Copy and pasted from server console log
const HOSTNAME = "192.168.8.174";

const PORT = 8080;
const URL = `http://${HOSTNAME}:${PORT}`;

console.log("process.env.NODE_ENV:", process.env.NODE_ENV)
console.log("Socket URL:", URL);

export const socket = io(URL);