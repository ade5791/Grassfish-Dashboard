var config = require("./dbconfig");

const sql = require("mssql");
let mssql = require("./mssql-pool-management.js");

async function getchewyPlayers() {
  try {
    let sqlPool = await mssql.GetCreateIfNotExistPool(config.chewyconfig);
    // console.log(sqlPool);
    let players = await sqlPool
      .request()
      .query("SELECT TOP 100 *  where BoxStatus=1 from dw.vwPlayers");

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
      .query("SELECT TOP 1000 * where BoxStatus=1 from dw.vwPlayers");
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
      .query(
        "SELECT TOP 1000 * from dw.vwPlayers where CustomerId=4 and BoxStatus=1 order by LastAccessDate"
      );
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
      .query(
        "SELECT TOP 1000 * from dw.vwPlayers where CustomerId=6 and BoxStatus=1 order by LastAccessDate"
      );
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
      .query(
        "SELECT TOP 1000 * from dw.vwPlayers where CustomerId=5 and BoxStatus=1 order by LastAccessDate"
      );
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
      .query(
        "SELECT TOP 1000 * from dw.vwPlayers where CustomerId=3 and BoxStatus=1order by LastAccessDate"
      );
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
      .query(
        "SELECT TOP 1000 * from dw.vwPlayers where CustomerId=11 and BoxStatus=1 order by LastAccessDate"
      );
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
      .query(
        "SELECT TOP 1000 * from dw.vwPlayers where CustomerId=8 and BoxStatus=1 order by LastAccessDate"
      );
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
      .query(
        "SELECT TOP 1000 * from dw.vwPlayers where CustomerId=2 and BoxStatus=1 order by LastAccessDate"
      );
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
