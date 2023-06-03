import { io } from "socket.io-client";

const HOSTNAME = "localhost"; // "Gershoms-MBP"; // Temporary during development
const PORT = 8080;
const URL = `http://${HOSTNAME}:${PORT}`;


export const socket = io(URL);