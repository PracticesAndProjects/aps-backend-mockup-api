import { HttpServer } from "./common/HttpServer";

class Server {
  static async start() {
    try {
      console.log("Starting servers...");
      HttpServer.start();
    } catch (err) {
      console.log(err);
    }
  }

  static async stop() {
    console.log("Gracefully stopping servers...");
    HttpServer.stop();
  }
}

process.on("SIGTERM", Server.stop);
process.on("SIGINT", Server.stop);

(async () => {
  await Server.start();
  //   await Server.stop();
})();
