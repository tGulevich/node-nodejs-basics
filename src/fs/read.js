import fs from "fs";

const FILE = "src/fs/files/fileToRead.txt";

const read = async () => {
  try {
    const existedFile = fs.existsSync(FILE);

    if (!existedFile) {
      throw "FS operation failed";
    } else {
      const data = fs.readFileSync(FILE, "utf8");
      console.log(data);
    }
  } catch (error) {
    console.error(error);
  }
};

await read();