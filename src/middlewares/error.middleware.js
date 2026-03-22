import { error as errorResponse } from "../utils/responseHandler.js";

export const errorMiddleware = (err, req, res, next) => {
  console.error(err);

  const status = err.statusCode ?? err.status ?? 500;
  return errorResponse(res, err.message || "Internal server error", status);
};
