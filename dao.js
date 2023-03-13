const dao = require('./db.js')

var dbconnection = dao.connection

exports.getUtilisateurs = async () => {
    try
    {
        const sql = 'SELECT * FROM Utilisateurs';
        const result = await dbconnection.query(sql);
        console.log(result+"test");
        console.log(JSON.stringify(result, null, 2));

        return result
    }
    catch(error)
    {
        console.error(error);
    }
    
    
}

