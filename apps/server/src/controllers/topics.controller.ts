import { Request, Response } from "express";
import { TopicModel } from "../models/Topic.model";

export const getTopics = async (_req: Request, res: Response) => {
  try {
    const topics = await TopicModel.find().lean();
    res.json(topics);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};
