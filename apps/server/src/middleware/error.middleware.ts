import { Request, Response, NextFunction } from "express";
import { HttpError } from "./httpError";

export const errorHandler = (err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  if (err instanceof HttpError) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  res.status(500).json({ message: "Server error" });
};
