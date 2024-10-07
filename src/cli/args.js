const PATTERN = "--";

const parseArgs = () => {
  const args = process.argv;

  args.forEach((item, index) => {
    if (item.includes(PATTERN)) {
      console.log(`${item.replace(PATTERN, "")} is ${args[index + 1]}`);
    }
  });
};

parseArgs();
