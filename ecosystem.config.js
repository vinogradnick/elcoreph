const apps = ["customer", "counter", "facility", "point", "node",'analytics'];

module.exports = {
  apps: apps.map((app, idx) => ({
    name: "elcoreph.ms." + app,
    script: `./elcoreph-ms-${app}/dist/main.js`,
    env: {
      NODE_ENV: "development",
      MONGO_DB_URL: "mongodb://localhost:27017/elcoreph",
      NATS_URL: "nats://localhost:4222",
      PORT: 4000 + idx + 1,
    },
    env_production: {
      NODE_ENV: "production",
      MONGO_DB_URL: "mongodb://localhost:27017/elcoreph",
      PORT: 4000 + idx,
    },
  })),

  // {
  //   name: "elcoreph.ms.customer",
  //   script: "./elcoreph-ms-customer/dist/main.js",
  //   watch: false,
  //   env: {
  //     NODE_ENV: "development",
  //     MONGO_DB_URL: "mongodb://localhost:27017/elcoreph",
  //     NATS_URL: "nats://localhost:4222",
  //     PORT: "4001",
  //   },
  //   env_production: {
  //     NODE_ENV: "production",
  //     MONGO_DB_URL: "mongodb://localhost:27017/elcoreph",
  //     PORT: "4002",
  //   },
  // },
};
