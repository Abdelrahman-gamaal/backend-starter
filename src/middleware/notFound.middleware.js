import AppError from "../utils/AppError.js";

function notFoundMiddleware(req, res, next) {
  next(new AppError(`Route not found: ${req.originalUrl}`, 404));
}

export default notFoundMiddleware;
