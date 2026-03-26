import path from "path";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { TopicModel } from "../models/Topic.model";
import { DSA_TOPICS } from "./dsaTopicsData";

dotenv.config({ path: path.resolve(process.cwd(), "../../.env") });

async function run() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    throw new Error("MONGO_URI is not set");
  }

  console.log("Seeding topics...");
  await mongoose.connect(uri, { serverSelectionTimeoutMS: 8000 });
  await TopicModel.deleteMany({});
  await TopicModel.insertMany(DSA_TOPICS);
  console.log(`✓ Seeded ${DSA_TOPICS.length} topics`);
  console.log("Done.");
  await mongoose.disconnect();
}

void run().catch((err: unknown) => {
  console.error(err);
  void mongoose.disconnect().finally(() => process.exit(1));
});
