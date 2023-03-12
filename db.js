const odbc = require('odbc');

const connectionString = "Driver={Microsoft Access Driver (*.mdb, *.accdb)};DBQ=C:\Users\aocol\OneDrive\Documents\IMT\Entreprise\Test\Affichage ELP.accdb;";
const connection = odbc.connect(connectionString);

const sql = "SELECT * FROM Utilisateurs";

connection.query(sql, function (error, results) {
  if (error) throw error;
  console.log(results);
});

connection.close();