require("dotenv").config();

module.exports = {
  development: {
    username: "postgres",
    password: "adrian",
    database: "final-project-2_development",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    username: "postgres",
    password: "adrian",
    database: "final-project-2_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: "postgres",
    password: "adrian",
    database: "final-project-2_production",
    host: "127.0.0.1",
    dialect: "postgres",
  },
};
