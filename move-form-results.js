var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var path = require('path');

function MoveResults(req,res) {
    var date = new Date(req.Acquiredt).toISOString().slice(0, 19).replace('T', ' ');

    //var sqlQuery1 = `Select LocationID from Location Where Location.City= '${req.City}' And Location.Building= '${req.Building}' And Location.Room= '${req.Room}';`
    //var sqlQuery2 = `Update Art Set LocationID = 1000 Where ArtID = ${req.ArtID}`
    

    //var sqlQuery3 = `INSERT INTO Gift(Acquiredt, Description) VALUES ('${date}', NULLIF('${req.DescriptionGift}',''));`
    //var sqlQuery4 = `Update Art Set Status = Gifted Where ArtID = ${req.ArtID}`
    //var sqlQuery5 = `INSERT INTO Artist(FName, LName, Phone, Email, Address1, Address2, City, State, Zip) VALUES('${req.Fname}', '${req.Lname}', '${req.Phone}', '${req.Email}', '${req.Address1}', NULLIF('${req.Address2}',''), '${req.City}', '${req.State}', '${req.Zip}');`


    var sql= require("mssql");

    var config = {
        user: 'bsnc',
        password: 'W3passwd',
        server: 'localhost',
        database: '489_BAMS',
        port: 1433
    };
    
    function NewLocation(req, res) {
        var sqlQuery1 = `Select LocationID from Location Where Location.City= '${req.City}' And Location.Building= '${req.Building}' And Location.Room= '${req.Room}';`;
        var sqlQuery2 = `Update Art Set LocationID = 1000 Where ArtID = ${req.ArtID}`;
        
        sql.connect(config, function (err) {
            if (err) console.log(err.message);
            let sqlRequest =  new sql.Request();	
            sqlRequest.query(sqlQuery1, sqlQuery2, function (err,data) {	
                if (err) console.log(err.message)
                sql.close();			
            });
        });}
    NewLocation(req);
    
    function Gift(req, res) {
        var sqlQuery3 = `INSERT INTO Gift(AcquiredtGift, DescriptionGift) VALUES ('${date}', NULLIF('${req.DescriptionGift}',''));`;
        var sqlQuery4 = `Update Art Set Status = Gifted Where ArtID = ${req.ArtID}`;
        var sqlQuery5 = `INSERT INTO Recipient(FName, LName, Phone, Email, Address1, Address2, City, State, Zip) VALUES('${req.Fname}', '${req.Lname}', '${req.Phone}', '${req.Email}', '${req.Address1}', NULLIF('${req.Address2}',''), '${req.City}', '${req.State}', '${req.Zip}');`;

        sql.connect(config, function (err) {
            if (err) console.log(err.message);
            let sqlRequest =  new sql.Request();	
            sqlRequest.query(sqlQuery3, sqlQuery4, sqlQuery5, function (err,data) {	
                if (err) console.log(err.message)
                sql.close();			
            });
        });}
    Gift(req);

    function Loan(req, res) {
        var sqlQuery6 = `INSERT INTO Loan(LoanDateOut, ReqyestedReturnDate, DescriptionLoan) VALUES ('${date}', '${date}', NULLIF('${req.DescriptionLoan}',''));`;
        var sqlQuery7 = `Update Art Set Status = Loaned Where ArtID = ${req.ArtID}`;
        var sqlQuery8 = `INSERT INTO Recipient(FName, LName, Phone, Email, Address1, Address2, City, State, Zip) VALUES('${req.Fname}', '${req.Lname}', '${req.Phone}', '${req.Email}', '${req.Address1}', NULLIF('${req.Address2}',''), '${req.City}', '${req.State}', '${req.Zip}');`;

        sql.connect(config, function (err) {
            if (err) console.log(err.message);
            let sqlRequest =  new sql.Request();	
            sqlRequest.query(sqlQuery6, sqlQuery7, sqlQuery8, function (err,data) {	
                if (err) console.log(err.message)
                sql.close();			
            });
        });}
    Loan(req);

    function Return(req, res) {
        sql.connect(config, function (err) {
            if (err) console.log(err.message);
            let sqlRequest =  new sql.Request();	
            sqlRequest.query(sqlQuery1, sqlQuery2, function (err,data) {	
                if (err) console.log(err.message)
                sql.close();			
            });
        });}
    Return(req);








    var h='<h1 class="logo"></h1><h2>The data was added to the database.</h2>';
    var str='<link rel="stylesheet" type="text/css" href="../css/style.css"></link>';
    res.send(h+str)

};
module.exports=MoveResults 

    /*if(req.ButtonID===1){
        var sqlQuery=`Select LocationID from Location
						Where Location.City= '${req.City}'
						And Location.Building= '${req.Building}'
                        And Location.Room= '${req.Room}';`
        var sqlQuery2=`Update Art
                        Set LocationID = 1002
                        Where ArtID = ${req.ArtID}` }*/ 