require("reflect-metadata");
require('dotenv').config();
const { DataSource } = require("typeorm");

const ormConfig = {
  type: process.env.DB_TYPE || 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'testormv2',
  entities: ["entity/**/*.js"],
  synchronize: process.env.DB_SYNCHRONIZE === 'true',
  migrations: ["db/migration/**/*.js"],
  cli: {
    migrationsDir: "migration"
  }
};

// Initialize your DataSource
const AppDataSource = new DataSource(ormConfig);

// Export the DataSource instance
module.exports = AppDataSource;
