import { createExpressApp } from "./ExpressApp";
import { createServer, Server } from "http";

class HttpServer {
  private static server: Server;
  private static port = process.env.PORT || "3000";

  static async createHttpServer() {
    const expressApp = await createExpressApp();

    expressApp.set("port", this.port);

    this.server = createServer(expressApp);
  }

  static async start() {
    await this.createHttpServer();

    console.log("[HTTP] Server starting...");

    this.server.listen(this.port, () => {
      console.log(`[HTTP] Server started successfully.`);
      console.log(`[HTTP] Listening on port *:${this.port}.`);
    });
  }

  static async stop() {
    console.log("[HTTP] Stopping server...");

    this.server.close(() => {
      console.log("[HTTP] Server was shut down.");
      process.exit(0);
    });

    setTimeout(() => {
      console.log(
        "[HTTP] Connections could not be closed in time... Server was shut down."
      );
      process.exit(1);
    }, 30000);
  }
}

export { HttpServer };
