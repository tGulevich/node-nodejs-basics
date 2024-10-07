import fs from "fs";
import zlib from "zlib";

const SOURCE_FILE = "src/zip/files/archive.gz";
const DEST_FILE = "src/zip/files/fileToCompress.txt";

const decompress = async () => {
  try {
    const unzip = zlib.createGunzip();

    const rs = fs.createReadStream(SOURCE_FILE);
    const ws = fs.createWriteStream(DEST_FILE);

    rs.pipe(unzip)
      .pipe(ws)
      .on("error", (err) => {
        throw `Error:", ${err}`;
      });
  } catch (error) {
    console.error(error);
  }
};

await decompress();
