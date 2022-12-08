const connections = {
  development: {
    client: "mysql",
    connection: {
      host: "o2olb7w3xv09alub.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      user: "cj7q22bozv71p33b",
      password: "lq7u8lcm7gme1yd3",
      database: "cn897qybgqqwzua5",
      charset: "utf8",
    },
  },
  production: {
    client: "mysql",
    connection: process.env.JAWSDB_URL,
  },
};

module.exports =
  process.env.NODE_ENV === "production"
    ? connections.production
    : connections.development;
