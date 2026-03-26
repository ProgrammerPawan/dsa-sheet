import { Request, Response } from "express";
import jwt, { type SignOptions } from "jsonwebtoken";
import { User } from "../models/User.model";

const signToken = (id: string) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("JWT_SECRET is not set");
  const options: SignOptions = {
    expiresIn: (process.env.JWT_EXPIRES_IN || "7d") as SignOptions["expiresIn"],
  };
  return jwt.sign({ id }, secret, options);
};

export const register = async (req: Request, res: Response) => {
  const { name, username, email, password } = req.body;
  const exists = await User.findOne({ $or: [{ email }, { username }] });
  if (exists) return res.status(400).json({ message: "User already exists" });
  const user = await User.create({ name, username, email, password });
  const token = signToken(user._id.toString());
  res.status(201).json({
    token,
    user: {
      _id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
    },
  });
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  const token = signToken(user._id.toString());
  res.json({
    token,
    user: {
      _id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
    },
  });
};
