import { spawn } from "child_process";

const SCRIPT_FILE = "src/cp/files/script.js";

export const spawnChildProcess = (args) => {
  const childProcess = spawn("node", [SCRIPT_FILE, ...args], {
    stdio: ["pipe", "pipe", "pipe"],
  });

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);
  childProcess.stderr.pipe(process.stderr);
};

const args = ["Have", "a", "good", "day", "!"];
spawnChildProcess(args);
