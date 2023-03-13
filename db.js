const ADODB = require('node-adodb');
const connect = ADODB.open('Provider=Microsoft.ACE.OLEDB.12.0;Data Source=C:\Users\aocol\OneDrive\Documents\IMT\Entreprise\Test\Affichage ELP.accdb;');
exports.connection = connect

