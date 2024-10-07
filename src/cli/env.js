const RSS = "RSS_";

const parseEnv = () => {
  const env = process.env;

  const variables = Object.keys(env)
    .filter((key) => key.startsWith(RSS))
    .map((key) => `${key}=${env[key]}`);

  console.log(variables.join("; "));
};

parseEnv();
