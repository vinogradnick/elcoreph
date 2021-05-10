const { execSync } = require("child_process");
const apps = ["customer", "counter", "facility", "point", "node",'analytics'];

execSync("pm2 delete all");

apps.forEach((app) => {
  execSync(`yarn --cwd ./elcoreph-ms-${app} build`);
  console.log("elcoreph.ms." + app, ",OK");
});
execSync("pm2 start");
