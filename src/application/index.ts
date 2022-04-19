class Server {
  static async start() {
    console.log("Starting server");
  }

  static async stop() {
    console.log("Stopping the server.");
  }
}

process.on("SIGTERM", Server.stop);
process.on("SIGINT", Server.stop);

(() => {
  Server.start();
  Server.stop();
})();
