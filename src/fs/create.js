import fs from "fs";

const PATH = "src/fs/files/fresh.txt";
const TEXT = "I am fresh and young";

const create = async () => {
  try {
    if (fs.existsSync(PATH)) {
      throw "FS operation failed";
    } else {
      fs.writeFile(PATH, TEXT, () => {
        console.log("Fresh.txt created");
      });
    }
  } catch (error) {
    console.error(error);
  }
};

await create();