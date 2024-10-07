import fs from "fs";

const FILE = "src/streams/files/fileToWrite.txt";

const write = async () => {
  try {
    const ws = fs.createWriteStream(FILE);

    process.stdin.pipe(ws);

    ws.on("error", (err) => {
      throw `Error:", ${err}`;
    });
  } catch (error) {
    console.error(error);
  }
};

await write();