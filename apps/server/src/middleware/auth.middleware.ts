import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { HttpError } from "./httpError";

export interface AuthRequest extends Request {
  userId?: string;
}

export const protect = (req: AuthRequest, _res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return next(new HttpError(401, "No token provided"));
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
    req.userId = decoded.id;
    next();
  } catch {
    next(new HttpError(401, "Invalid token"));
  }
};
