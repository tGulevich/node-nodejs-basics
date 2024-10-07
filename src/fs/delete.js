import fs from "fs";

const FILE = "src/fs/files/fileToRemove.txt";

const remove = async () => {
  try {
    const existedFile = fs.existsSync(FILE);
    if (!existedFile) {
      throw "FS operation failed";
    } else {
      fs.unlink(FILE, (err) => {
        if (err) {
          throw err;
        }
      });
    }
  } catch (error) {
    console.error(error);
  }
};

await remove();