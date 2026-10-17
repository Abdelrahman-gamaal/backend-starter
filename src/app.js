import express from "express";
import healthRoutes from "./modules/health/health.routes.js";
import errorMiddleware from "./middleware/error.middleware.js";
import notFoundMiddleware from "./middleware/notFound.middleware.js";

import AppError from "./utils/AppError.js";

const app = express();

app.use(express.json());

// Health check endpoint
app.use("/health", healthRoutes);

// Handle unknown routes
app.use(notFoundMiddleware);

// Global Error Handler
app.use(errorMiddleware);
export default app;
