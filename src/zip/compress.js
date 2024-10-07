import fs from "fs";
import zlib from "zlib";

const SOURCE_FILE = "src/zip/files/fileToCompress.txt";
const DEST_FILE = "src/zip/files/archive.gz";

const compress = async () => {
  try {
    const gzip = zlib.createGzip();

    const rs = fs.createReadStream(SOURCE_FILE);
    const ws = fs.createWriteStream(DEST_FILE);

    rs.pipe(gzip)
      .pipe(ws)
      .on("error", (err) => {
        throw `Error:", ${err}`;
      });
  } catch (error) {
    console.error(error);
  }
};

await compress();
