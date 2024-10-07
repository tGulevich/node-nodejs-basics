import fs from "fs";

const SOURCE_DIR = "src/fs/files";

const list = async () => {
  try {
    const existedSourceDir = fs.existsSync(SOURCE_DIR);
    if (!existedSourceDir) {
      throw "FS operation failed";
    } else {
      fs.readdir(SOURCE_DIR, async function (err, filenames) {
        if (err) {
          throw "FS operation failed";
        }

        console.log("Filenames:", filenames);
      });
    }
  } catch (error) {
    console.error(error);
  }
};

await list();