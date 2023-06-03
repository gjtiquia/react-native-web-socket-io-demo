# React Native Web Socket.io Demo

A demo project to test the compatibility between React Native Web and Socket.io.

This project uses an Expo managed workflow.

## Overview

The demo is a simple counter app. The server has a global count which can be incremented by any client.

The server is an Express server, using Socket.io for communication between the server and client.

With the Expo managed workflow and React Native Web setup, clients can be on the browser or on iOS/Android while sharing the same code!

## Instructions

It is recommended to first have the server setup before having the frontend setup, as the frontend needs to connect to the backend.

### Setting up the Backend Development Environment

Read [this](./server/README.md) for setup instructions.

### Setting up the Frontend Development Environment

Install all the required dependencies with the following command.

```bash
npm install
```

Start a development server with the following command.

```bash
npm start
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
