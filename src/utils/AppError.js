class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    if (!Number.isInteger(statusCode) || statusCode < 400 || statusCode > 599) {
      throw new TypeError(
        "AppError statusCode must be an integer between 400 and 599",
      );
    }

    this.name = "AppError";
    this.statusCode = statusCode;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
