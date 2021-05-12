const chewyconfig = {
  user: "dashboard",
  password: "Simple1234!",
  server: "grassfish.database.windows.net",
  database: "Chewy-GV2_Base",
  options: {
    trustedConnection: true,
    enableArithabort: true,
  },
  port: 1433,
};

const elcconfig = {
  user: "dashboard",
  password: "Simple1234!",
  server: "grassfish.database.windows.net",
  database: "ELC-GV2_Base",
  options: {
    trustedConnection: true,
    enableArithabort: true,
  },
  port: 1433,
};

module.exports = { chewyconfig: chewyconfig, elcconfig: elcconfig };
