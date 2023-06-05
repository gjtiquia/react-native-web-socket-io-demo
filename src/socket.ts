import { io } from "socket.io-client";
import { DEV_IP, DEV_PORT } from "server/devConfig"
import { PROD_URL } from "server/prodConfig";

const DEVELOPMENT_HOSTNAME = DEV_IP;
const DEVELOPMENT_PORT = DEV_PORT;
const PRODUCTION_URL = PROD_URL;

export const URL = process.env.NODE_ENV === "production" ? PRODUCTION_URL : `http://${DEVELOPMENT_HOSTNAME}:${DEVELOPMENT_PORT}`;
// export const URL = PRODUCTION_URL; // Use this instead if want to connect to production server

export const socket = io(URL);