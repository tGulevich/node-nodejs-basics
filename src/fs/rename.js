import fs from "fs";

const OLD_FILE_NAME = "src/fs/files/wrongFilename.txt";
const NEW_FILE_NAME = "src/fs/files/properFilename.md";

const rename = async () => {
  try {
    const existedOldFile = fs.existsSync(OLD_FILE_NAME);
    const existedNewFile = fs.existsSync(NEW_FILE_NAME);
    if (!existedOldFile || existedNewFile) {
      throw "FS operation failed";
    } else {
      fs.rename(OLD_FILE_NAME, NEW_FILE_NAME, function (err) {
        if (err) throw err;
      });
    }
  } catch (error) {
    console.error(error);
  }
};

await rename();