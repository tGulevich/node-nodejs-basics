import fs from "fs";

const SOURCE_DIR = "src/fs/files";
const DEST_DIR = "src/fs/files_copy";

const copy = async () => {
  try {
    const existedSourceDir = fs.existsSync(SOURCE_DIR);
    const existedDestDir = fs.existsSync(DEST_DIR);
    if (!existedSourceDir || existedDestDir) {
      throw "FS operation failed";
    } else {
      fs.mkdirSync(DEST_DIR);

      fs.readdir(SOURCE_DIR, async function (err, filenames) {
        if (err) {
          throw "FS operation failed";
        }

        for await (const file of filenames) {
          fs.copyFile(`${SOURCE_DIR}/${file}`, `${DEST_DIR}/${file}`, (err) => {
            if (err) throw err;
          });
        }
      });
    }
  } catch (error) {
    console.error(error);
  }
};

await copy();
