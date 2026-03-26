import mongoose, { Document, Schema } from "mongoose";

export interface IProgress extends Document {
  userId: mongoose.Types.ObjectId;
  problemId: string;
  completed: boolean;
  completedAt?: Date;
}

const ProgressSchema = new Schema<IProgress>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    problemId: { type: String, required: true },
    completed: { type: Boolean, default: false },
    completedAt: { type: Date },
  },
  { timestamps: true }
);

ProgressSchema.index({ userId: 1, problemId: 1 }, { unique: true });

export const Progress = mongoose.model<IProgress>("Progress", ProgressSchema);
