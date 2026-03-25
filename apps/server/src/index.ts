import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { connectDB } from "./config/db";
import authRoutes from "./routes/auth.routes";
import progressRoutes from "./routes/progress.routes";
import topicsRoutes from "./routes/topics.routes";
import statsRoutes from "./routes/stats.routes";

dotenv.config({ path: "../../.env" });

const app = express();
const PORT = Number(process.env.PORT) || 5050;

const devOrigins = new Set([
  "http://localhost:5173",
  "http://localhost:5174",
  "http://127.0.0.1:5173",
  "http://127.0.0.1:5174",
]);

app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin) return cb(null, true);
      if (devOrigins.has(origin)) return cb(null, true);
      return cb(null, false);
    },
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/topics", topicsRoutes);
app.use("/api/stats", statsRoutes);

app.get("/api/health", (_, res) => res.json({ status: "ok" }));

const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

server.on("error", (err: NodeJS.ErrnoException) => {
  if (err.code === "EADDRINUSE") {
    console.error(
      `Port ${PORT} is already in use. Stop the other process (e.g. lsof -i :${PORT}) or set PORT in .env to a free port and update apps/client/vite.config.ts proxy target + VITE_API_URL.`
    );
  }
});

void connectDB().catch((err: Error) => {
  console.error("MongoDB connection failed — start MongoDB for auth/progress:", err.message);
});

let shuttingDown = false;
function shutdown(signal: string) {
  if (shuttingDown) return;
  shuttingDown = true;
  console.log(`\n${signal} received, closing server…`);
  server.close((closeErr) => {
    if (closeErr) console.error("Error closing HTTP server:", closeErr.message);
    void mongoose.disconnect().finally(() => {
      console.log("Shutdown complete.");
      process.exit(closeErr ? 1 : 0);
    });
  });
  setTimeout(() => {
    console.error("Shutdown timed out, exiting.");
    process.exit(1);
  }, 10_000).unref();
}

process.once("SIGINT", () => shutdown("SIGINT"));
process.once("SIGTERM", () => shutdown("SIGTERM"));
