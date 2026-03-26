import mongoose, { Schema } from "mongoose";
import type { Difficulty } from "@dsa-sheet/shared";

const difficulties: Difficulty[] = ["Easy", "Medium", "Hard"];

const ProblemSchema = new Schema(
  {
    id: { type: String, required: true },
    title: { type: String, required: true },
    difficulty: { type: String, required: true, enum: difficulties },
    leetcode: { type: String },
    youtube: { type: String },
    article: { type: String },
  },
  { _id: false }
);

const SubtopicSchema = new Schema(
  {
    id: { type: String, required: true },
    title: { type: String, required: true },
    problems: { type: [ProblemSchema], default: [] },
  },
  { _id: false }
);

const TopicSchema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    subtopics: { type: [SubtopicSchema], default: [] },
  },
  { timestamps: false }
);

export const TopicModel = mongoose.model("Topic", TopicSchema);
