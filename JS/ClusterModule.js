import cluster from "cluster";
import os from "os";
import express from "express";

//Find Number of Cores 
const numCPUs = os.cpus().length;

//MASTER PROCESS
if (cluster.isPrimary) {
  console.log(` Master ${process.pid} running`);
  console.log(` Starting ${numCPUs} workers...\n`);

// Create workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Restart worker if it crashes
  cluster.on("exit", (worker, code, signal) => {
    console.log(` Worker ${worker.process.pid} died`);
    console.log(" Restarting...\n");
    cluster.fork();
  });

} 
// WORKER PROCESS
else {
  const app = express();

  // Simple route
  app.get("/", (req, res) => {
    res.send(`Hello from Worker ${process.pid}`);
  });

  // Health check route (important in production)
  app.get("/health", (req, res) => {
    res.status(200).json({ status: "OK", pid: process.pid });
  });

  const server = app.listen(3000, () => {
    console.log(` Worker ${process.pid} started`);
  });

  // Graceful shutdown
  process.on("SIGTERM", () => {
    console.log(` Worker ${process.pid} shutting down...`);
    server.close(() => {
      process.exit(0);
    });
  });
}