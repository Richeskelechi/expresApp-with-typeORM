require("reflect-metadata");
require('dotenv').config();
const winston = require("winston");
const express = require("express");
const AppDataSource = require("./db/data-source");
const app = express();

require("./startup/logging")();
require("./startup/cors")(app);
require("./startup/allRoutes")(app);
require("./startup/validation")();
require("./startup/prod")(app);

// Initialize your DataSource
const port = process.env.PORT || 3010;
let server;

AppDataSource.initialize()
  .then(() => {
    server = app.listen(port, () => {
      winston.info(`Listening now on port ${port}... And Database Is Connected`);
      console.log(`Listening now on port ${port}... And Database Is Connected`);
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

module.exports = server;
