var config = require("./dbconfig");

const sql = require("mssql");
let mssql = require("./mssql-pool-management.js");

async function getchewyPlayers() {
  try {
    let sqlPool = await mssql.GetCreateIfNotExistPool(config.chewyconfig);
    // console.log(sqlPool);
    let players = await sqlPool
      .request()
      .query("SELECT TOP 1000 * from dw.vwPlayers");

    return players.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getelcPlayers() {
  try {
    let sqlPool = await mssql.GetCreateIfNotExistPool(config.elcconfig);
    let players = await sqlPool
      .request()
      .query("SELECT * from dbo.dbo_vid_vwoffline  Order by DayOffline");
    return players.recordsets;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getchewyPlayers: getchewyPlayers,
  getelcPlayers: getelcPlayers,
};
