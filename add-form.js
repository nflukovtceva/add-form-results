var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var path = require('path');


function Add (req, res) {
    var date = new Date(req.Acquiredt).toISOString().slice(0, 19).replace('T', ' ');
    
    var sqlQuery1= `INSERT INTO Art(LocationID, Title, Type, Description, Collection, Status, Purchase_Price, Value, Acquiredt, Available, Media) VALUES('1000','${req.Title}', '${req.Type}', NULLIF('${req.DescriptionArt}', ''), NULLIF('${req.Collection}', ''), '${req.Status}', '${req.Purchase_Price}', '${req.Value}', '${date}', ${req.Available}, '${req.Media}');`
    var sqlQuery2= `INSERT INTO Artist(LName, FName, Phone, Email, Address1, Address2, State, City, Zip, Shareholder) VALUES('${req.Lname}', '${req.Fname}', '${req.Phone}', '${req.Email}', '${req.Address1}', NULLIF('${req.Address2}', ''), '${req.State}', '${req.CityArtist}', '${req.Zip}', '${req.Shareholder[0]}');`
    var sqlQuery3= `INSERT INTO Location(City, Building, Room, Description) VALUES('${req.CityLocation}', '${req.Building}', '${req.Room}', NULLIF('${req.DescriptionLocation}', ''));`
    var sql= require("mssql");

    var config = {
        user: 'bsnc',
        password: 'W3passwd',
        server: 'localhost',
        database: '489_BAMS',
        port: 1433
    };
    function addArt(req){
        sql.connect(config, function (err) {
            if (err) console.log(err.message);
            let sqlRequest =  new sql.Request();	
            sqlRequest.query(sqlQuery1, function (err,data) {	
                if (err) console.log(err.message)
                sql.close();			
            });
        });}
    function addArtist(req){
    sql.connect(config, function (err) {
		if (err) console.log(err.message);
		let sqlRequest =  new sql.Request();	
		sqlRequest.query(sqlQuery2, function (err,data) {	
			if (err) console.log(err.message)
			sql.close();			
		});
    });}
    function addLocation(req){
        sql.connect(config, function (err) {
            if (err) console.log(err.message);
            let sqlRequest =  new sql.Request();	
            sqlRequest.query(sqlQuery3, function (err,data) {	
                if (err) console.log(err.message)
                sql.close();			
            });
        });}
    addArt(req);
    addArtist(req);
    addLocation(req);
    
   
    var h='<h1 class="logo"></h1><h2>The data was added to the database.</h2>';
    var str='<link rel="stylesheet" type="text/css" href="../css/style.css"></link>';
    res.send(h+str)
}
module.exports=Add;