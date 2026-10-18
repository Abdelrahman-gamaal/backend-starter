const port = Number(process.env.SERVER_PORT || 3000);

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error("SERVER_PORT must be an integer between 1 and 65535");
}

const nodeEnv = process.env.NODE_ENV || "development";

const allowedEnvironments = ["development", "production", "test"];

if (!allowedEnvironments.includes(nodeEnv)) {
  throw new Error(`NODE_ENV must be one of: ${allowedEnvironments.join(", ")}`);
}

const env = {
  nodeEnv,
  port,

  database: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 3306,
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },

  jwtSecret: process.env.JWT_SECRET,
};

export default env;
