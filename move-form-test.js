var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var path = require('path');

function MoveResults(req,res) {
    var sqlQuery1 = `Select LocationID from Location Where Location.City= '${req.City}' 
                                                    And Location.Building= '${req.Building}' 
                                                    And Location.Room= '${req.Room}';`
    var sqlQuery2 = `Update Art
                    Set LocationID = 1035
                    Where ArtID = ${req.ArtID}`
    var sql= require("mssql");

    var config = {
        user: 'bsnc',
        password: 'W3passwd',
        server: 'localhost',
        database: '489_BAMS',
        port: 1433
    };
    function NewLocation(req, res) {
        sql.connect(config, function (err) {
            if (err) console.log(err.message);
            let sqlRequest =  new sql.Request();	
            sqlRequest.query(sqlQuery1, sqlQuery2, function (err,data) {	
                if (err) console.log(err.message)
                sql.close();			
            });
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log(result.affectedRows + " record(s) updated");
              });
        });}
    NewLocation(req);
                    
};
module.exports=MoveResults 
