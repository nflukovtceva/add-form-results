var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var path = require('path');

function MoveResults(req,res) {
    var sqlQuery1 = `Select LocationID from Location Where Location.City= '${req.City}' 
                                                    And Location.Building= '${req.Building}' 
                                                    And Location.Room= '${req.Room}';`
    var sqlQuery2 = `Update Art
                    Set LocationID = 1000
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
        });}
    NewLocation(req);
              
    var h='<h1 class="logo"></h1><h2>The data was added to the database.</h2>';
    var str='<link rel="stylesheet" type="text/css" href="../css/style.css"></link>';
    res.send(h+str)

};
module.exports=MoveResults 