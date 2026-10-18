import "dotenv/config";
import app from "./src/app.js";
import env from "./src/config/env.js";

app.listen(env.port, () => {
  console.log(`server is running on port ${env.port}`);
  console.log(`Environment: ${env.nodeEnv}`);
});
