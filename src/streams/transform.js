import stream from "stream";

const transform = async () => {
  const reverseStr = new stream.Transform({
    transform(chunk, encoding, callback) {
      const reversed = chunk.toString().split("").reverse().join("");
      callback(null, reversed);
    },
  });

  process.stdin.pipe(reverseStr).pipe(process.stdout);
};

await transform();