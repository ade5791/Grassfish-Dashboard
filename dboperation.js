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

async function getmacPlayers() {
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

async function getesteePlayers() {
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

async function getavedaPlayers() {
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

async function gettomfordPlayers() {
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

async function getcliniquePlayers() {
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
async function getbobbybrownPlayers() {
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

async function getlamerPlayers() {
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
  getesteePlayers: getesteePlayers,
  getcliniquePlayers: getcliniquePlayers,
  gettomfordPlayers: gettomfordPlayers,
  getbobbybrownPlayers: getbobbybrownPlayers,
  getmacPlayers: getmacPlayers,
  getavedaPlayers: getavedaPlayers,
  getlamerPlayers: getlamerPlayers,
};
