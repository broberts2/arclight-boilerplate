const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config");
const routes = require("./routes");
const app = express();
const security = require("./security");
const secure = express.Router();

mongoose.connect(config.db, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));
secure.use(cors({ origin: true, credentials: true }));
secure.use(security);

app.use("/secure", secure);

routes(app, secure);

app.listen(config.port, () =>
  console.log(
    `--------------------------------------------------------------` +
      `\n\t\tListening on port ${config.port}\n` +
      `--------------------------------------------------------------`
  )
);
