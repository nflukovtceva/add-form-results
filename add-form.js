var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var path = require('path');


function Add (req, res) {
    
    var sql= require("mssql");

    var config = {
        user: 'bsnc',
        password: 'W3passwd',
        server: 'localhost',
        database: '489_BAMS',
        port: 1433
    };

    function addArtist(req){
    var dbConn = new sql.ConnectionPool(config);

        dbConn.connect().then(function () {

            var transaction = new sql.Transaction(dbConn);
            transaction.begin().then(function () {
                var request = new sql.Request(transaction);
                request.query(`INSERT INTO Artist(LName, FName, Phone, Email, Address1, Address2, State, City, Zip, Shareholder) VALUES('${req.Lname}', '${req.Fname}', '${req.Phone}', '${req.Email}', '${req.Address1}', '${req.Address2}', '${req.State}', '${req.CityArtist}', '${req.Zip}', '${req.Shareholder[0]}');`)
            .then(function () {
                    transaction.commit().then(function (recordSet) {
                        //console.log(recordSet);
                        dbConn.close();
                    }).catch(function (err) {
                        console.log("Error in Transaction Commit " + err);
                        dbConn.close();
                    });
                }).catch(function (err) {
                    console.log("Error in Transaction Begin " + err);
                    dbConn.close();
                });
                
            }).catch(function (err) {
                console.log(err);
                dbConn.close();
            });
        }).catch(function (err) {
            console.log(err);
        });
    }

    addArtist(req);

    function addArt(req){
        console.log(req)
        var dbConn = new sql.ConnectionPool(config);
        
            dbConn.connect().then(function () {
        
                var transaction = new sql.Transaction(dbConn);
                transaction.begin().then(function () {
                    var request = new sql.Request(transaction);
                    var date = new Date(req.Acquiredt).toISOString().slice(0, 19).replace('T', ' ');
                    request.query(`INSERT INTO Art(LocationID, Title, Type, Description, Collection, Status, Purchase_Price, Value, Acquiredt, Available, Media) VALUES('1000','${req.Title}', '${req.Type}', '${req.DescriptionArt}', '${req.Collection}', '${req.Status}', '${req.Purchase_Price}', '${req.Value}', '${date}', ${req.Available}, '${req.Media}');`)
                .then(function () {
                        transaction.commit().then(function (recordSet) {
                            //console.log(recordSet);
                            dbConn.close();
                        }).catch(function (err) {
                            console.log("Error in Transaction Commit " + err);
                            dbConn.close();
                        });
                    }).catch(function (err) {
                        console.log("Error in Transaction Begin " + err);
                        dbConn.close();
                    });
                    
                }).catch(function (err) {
                    console.log(err);
                    dbConn.close();
                });
            }).catch(function (err) {
                console.log(err);
            });
        }  
    addArt(req);

    function addLocation(req){
        var dbConn = new sql.ConnectionPool(config);
        
            dbConn.connect().then(function () {
        
                var transaction = new sql.Transaction(dbConn);
                transaction.begin().then(function () {
                    var request = new sql.Request(transaction);
                    request.query(`INSERT INTO Location(City, Building, Room, Description) VALUES('${req.CityLocation}', '${req.Building}', '${req.Room}', '${req.DescriptionLocation}');`)
                .then(function () {
                        transaction.commit().then(function (recordSet) {
                            //console.log(recordSet);
                            dbConn.close();
                        }).catch(function (err) {
                            console.log("Error in Transaction Commit " + err);
                            dbConn.close();
                        });
                    }).catch(function (err) {
                        console.log("Error in Transaction Begin " + err);
                        dbConn.close();
                    });
                    
                }).catch(function (err) {
                    console.log(err);
                    dbConn.close();
                });
            }).catch(function (err) {
                console.log(err);
            });
        }  
    addLocation(req);

    var h='<h1 class="logo"></h1><h2>The data was added to the database.</h2>';
    var str='<link rel="stylesheet" type="text/css" href="../css/style.css"></link>';
    res.send(h+str)
}
module.exports=Add;