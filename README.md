# React Native Web Socket.io Demo

A demo project to test the compatibility between React Native Web and Socket.io using an Expo managed workflow.

The web app is hosted here: [react-native-web-socket-io-demo.netlify.app](https://react-native-web-socket-io-demo.netlify.app/)

The server is hosted at Railway.app. The Railway project is public, [click here](https://railway.app/project/6a8b4fc4-1915-47da-a35a-fcde90c5c79a) to view it.

## Overview

The demo is a simple counter app. The server has a global count which can be incremented by any client.

The server is an Express server, using Socket.io for communication between the server and client.

With the Expo managed workflow and React Native Web setup, clients can be on the browser or on iOS/Android while sharing the same code!

## Instructions

### Quick Preview

To have a quickly run a preview of the project, run the following commands.

Install the required dependencies for both the client and the server with the following command.

```bash
npm run quick:install
```

Start a quick preview with the following command.

```bash
npm run quick:start
```

A backend server will start on your local machine, followed by the Expo development server.

Following the on-screen instructions, press "w" to open the app on the web.

To open the app on mobile, ensure your mobile has the Expo Go app installed and is connected to the same local network as the computer, then scan the QR code shown with the Expo Go app (Android) or the Camera App (iOS).

Feel free to copy and paste the website link in different tabs while also having the app on mobile at the same time. You should be able to see the count updating on all clients, no matter which client presses the button.

Press Ctrl-C to stop the servers.

### Development Environment

It is recommended to open two terminals for development, one for the server and one for the client. Setup the server before setting up the client.

In one of the terminals, follow the instructions for setting up a server development environment [here](./server/README.md#setting-up-a-server-development-environment).

For the client development environment, install all the required dependencies with the following command on another terminal if they have not been installed yet with `npm run quick:install` from [Quick Preview](./README.md#quick-preview).

```bash
npm install
```

Start a development server with the following command.

```bash
npm run dev
```

Following the on-screen instructions, press "w" to open the app on the web.

To open the app on mobile, ensure your mobile has the Expo Go app installed and is connected to the same local network as the computer, then scan the QR code shown with the Expo Go app (Android) or the Camera App (iOS).

### Creating a Web App Build

Create a web app build with the following command.

```bash
npx expo export:web
```

This creates a production-ready static bundle in the web-build directory at the root of the project.

Serve the static bundle locally with the following command.

```bash
npx serve web-build
```

Follow the on-screen instructions to test locally how the app works in production.

Read [here](https://docs.expo.dev/distribution/publishing-websites/) for more documentation on creating web apps with Expo.
