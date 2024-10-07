import { Worker } from "worker_threads";
import os from "os";

const WORKER_PATH = "./worker.js";

const performCalculations = async () => {
  const cpusLength = os.cpus().length;

  const promises = Array.from({ length: cpusLength }, (v, i) => {
    return new Promise((resolve) => {
      const worker = new Worker(new URL(WORKER_PATH, import.meta.url), {
        workerData: 10 + i,
      });

      worker.on("message", (message) => {
        resolve(message);
      });

      worker.on("error", () => {
        resolve({ status: "error", data: null });
      });
    });
  });

  const result = await Promise.all(promises);
  console.log("🚀 ~ performCalculations ~ result:", result);
};

await performCalculations();
