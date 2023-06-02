# React Native Web Template

A React Native Web template set up with Expo and configured with NativeWind for styling.

## Libraries Used
- Expo
- React Native Web
- NativeWind

## Instructions

### Setting up a Development Environment

Install all the required dependencies with the following command.
```
npm install
```
Start a development server with the following command.
```
npm start
```
Following the on-screen instructions, press "w" to open the app on the web.

To open the app on mobile, ensure your mobile has the Expo Go app installed and is connected to the same local network as the computer, then scan the QR code shown with the Expo Go app (Android) or the Camera App (iOS).

### Creating a Web App Build

Create a web app build with the following command.
```
npx expo export:web
```
This creates a production-ready static bundle in the web-build directory at the root of the project.

Serve the static bundle locally with the following command.
```
npx serve web-build
```
Follow the on-screen instructions to test locally how the app works in production.

Read [here](https://docs.expo.dev/distribution/publishing-websites/) for more documentation on creating web apps with Expo.