import { Request, Response, NextFunction } from "express";

// TODO: Wire into Express app and expand error handling as needed.
export const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).json({ message: "Server error" });
};
