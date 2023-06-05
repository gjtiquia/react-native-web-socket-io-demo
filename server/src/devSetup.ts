import os from "os";
import fs from "fs";

// Gets all the remote IPs for the development server machine. Gets the same value as Expo's development server.
// Reference: https://github.com/FredKSchott/snowpack/discussions/2011
const remoteIps = Object.values(os.networkInterfaces())
    .reduce((every: os.NetworkInterfaceInfo[], i) => [...every, ...(i || [])], [])
    .filter((i) => i.family === 'IPv4' && i.internal === false)
    .map((i) => i.address);

console.log("Remote IPs:", remoteIps);

const FALLBACK_IP = "0.0.0.0"; // Setting to 0.0.0.0 allows to listen to computer ip or all network interfaces of the computer. Ref: https://stackoverflow.com/questions/21263021/connect-to-another-computer-using-ip-address?rq=4
const DEV_IP: string = remoteIps.length > 0 ? remoteIps[0] : FALLBACK_IP;
const DEV_PORT = 8080; // Arbitrary port

// Write the remote IP and port to a file so it can be used by the frontend
const FILE_PATH = "devConfig.js";
const FILE_CONTENTS = `// These are set during runtime in a development environment \nexport const DEV_IP = "${DEV_IP}"; \nexport const DEV_PORT = "${DEV_PORT}";`;
fs.writeFile(FILE_PATH, FILE_CONTENTS, (err) => {
    if (err) console.error(err);
    else console.log(`Successfully wrote current Host IP and PORT to ${FILE_PATH}`)
})