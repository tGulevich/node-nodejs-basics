import fs from "fs";
import crypto from "crypto";

const FILE = "src/hash/files/fileToCalculateHashFor.txt";

const calculateHash = async () => {
  try {
    const hash = crypto.createHash("sha256");
    const rs = fs.createReadStream(FILE);
    rs.on("error", (err) => {
      throw `Error:", ${err}`;
    });
    rs.on("data", (chunk) => hash.update(chunk));
    rs.on("end", () => {
      console.log(hash.digest("hex"));
    });
  } catch (error) {
    console.error(error);
  }
};

await calculateHash();