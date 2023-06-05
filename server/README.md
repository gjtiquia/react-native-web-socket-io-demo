# Server

## Instructions

### Setting up a Server Development Environment

From the root directory, go into the server directory with the following command.

```bash
cd server
```

Make sure you are in the server directory before running the commands below.

If the dependencies have not yet been installed with `npm run quick:install` from [Quick Preview](../README.md#quick-preview), run the following command.

```bash
npm install
```

Start the development environment with the following command.

```bash
npm run dev
```

This command compiles the TypeScript code, does the necessary setup and starts a server. Press Ctrl-C to stop the server.

Changes to the TypeScript code are watched by the TypeScript compiler. Changes to the JavaScript code are watched by [nodemon](https://github.com/remy/nodemon). Therefore, any changes to the TypeScript source code will automatically restart the server.

To start a server without watching for changes, use the following command instead.

```bash
npm start
```

Read [this](../README.md#development-environment) for instructions on setting up the client environment.
