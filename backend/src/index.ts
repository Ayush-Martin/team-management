import App from "./app";
import http from "http";

import { envConfig } from "./shared/configs/env";

const appInstance = new App();
const server = http.createServer(appInstance.app);

async function init() {}

init()
  .then(() => {
    server.listen(envConfig.PORT, () => {
      console.info(`[Server] Running on port ${envConfig.PORT}`);
    });
  })
  .catch((err) => {
    console.error(`[Application] [Error] ${err}`);
  });
