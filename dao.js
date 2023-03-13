const dao = require('./db.js')

var dbconnection = dao.connection

exports.getUtilisateurs = async () => {

    const sql = "SELECT * FROM Utilisateurs";
    const result = await dbconnection.query(sql);
    console.log(result);
    return result
}

