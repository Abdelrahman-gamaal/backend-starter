function errorMiddleware(err, req, res, next) {
  const isMalformedJson = err.type === "entity.parse.failed";
  const isOperational = err.isOperational === true || isMalformedJson;

  let statusCode = 500;
  let message = "Internal Server Error";

  if (isMalformedJson) {
    statusCode = 400;
    message = "Invalid JSON payload";
  } else if (err.isOperational) {
    statusCode = err.statusCode;
    message = err.message;
  }

  if (!isOperational) {
    console.error("Unexpected Error:", err);
  }

  res.status(statusCode).json({
    status: "error",
    message,
  });
}

export default errorMiddleware;
