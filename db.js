const fs = require('fs');
const initSqlJs = require('sql.js/dist/sql-wasm');
const filebuffer = fs.readFileSync('C:\\Users\\ugoma\\main');

// query 
const getUtilisateursQuery = initSqlJs().then(async function (SQL) {
  const db = new SQL.Database(filebuffer);
  var res = await db.exec("SELECT * FROM company ;");

  return res[0].values
});

// export queyr
exports.getUtilisateurs = async () => {

  var res = await getUtilisateursQuery

  return res
}