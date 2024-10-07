import fs from "fs";

const FILE = "src/streams/files/fileToRead.txt";

const read = async () => {
  try {
    const rs = fs.createReadStream(FILE);
    rs.on("error", (err) => {
      throw `Error:", ${err}`;
    });
    rs.on("data", (chunk) => {
      process.stdout.write(chunk + "\n");
    });
  } catch (error) {
    console.error(error);
  }
};

await read();