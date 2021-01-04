const bodyParser = require("body-parser");
const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");
const fs = require("fs");
const config = require("./config");

app.use(bodyParser.json());

app.use(cors());

routes(app);

let server = null;
if (config.production) {
  const key = fs.readFileSync(
    "/etc/letsencrypt/live/arclight.cc/privkey.pem",
    "utf8"
  );
  const cert = fs.readFileSync(
    "/etc/letsencrypt/live/arclight.cc/cert.pem",
    "utf8"
  );
  server = require("https").createServer({ key, cert }, app);
} else {
  server = require("http").createServer(app);
}

server.listen(config.port, () =>
  console.log(
    `--------------------------------------------------------------` +
      `\n\t\tArclight.cc listening on port ${config.port}\n` +
      `--------------------------------------------------------------`
  )
);
