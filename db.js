const fs = require('fs');
const initSqlJs = require('sql.js/dist/sql-wasm');
const filebuffer = fs.readFileSync('C:\\Users\\ugoma\\main');


exports.connection =  initSqlJs().then(async function(SQL){
    // Load the db
    const db = new SQL.Database(filebuffer);
    var res = await db.exec("SELECT * FROM company ;");
    console.log("res: "+JSON.stringify(res))
    return db
  });