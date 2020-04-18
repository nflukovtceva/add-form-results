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

function addArtist(LName, FName, Phone, Email, Address1, Address2, State, City, Zip, Shareholder){

var dbConn = new sql.Connection(config);

    dbConn.connect().then(function () {

        var transaction = new sql.Transaction(dbConn);
        transaction.begin().then(function () {
            var request = new sql.Request(transaction);
            request.query('INSERT INTO Artist(LName, FName, Phone, Email, Address1, Address2, State, City, Zip, Shareholder) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)')
        .then(function () {
                transaction.commit().then(function (recordSet) {
                    console.log(recordSet);
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

addArtist();

function addArt(Title, Type, Description, Collection, Status, Purchase_Price, Value, Acquireddt, Available, Media){

    var dbConn = new sql.Connection(config);
    
        dbConn.connect().then(function () {
    
            var transaction = new sql.Transaction(dbConn);
            transaction.begin().then(function () {
                var request = new sql.Request(transaction);
                request.query('INSERT INTO Art(Title, Type, Description, Collection, Status, Purchase_Price, Value, Acquireddt, Available, Media) VALUES($11, $12, $13, $14, $15, $16, $17, $18, $19, $20)')
            .then(function () {
                    transaction.commit().then(function (recordSet) {
                        console.log(recordSet);
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
addArt();

function addLocation(City, Building, Room, Description){
    var dbConn = new sql.Connection(config);
    
        dbConn.connect().then(function () {
    
            var transaction = new sql.Transaction(dbConn);
            transaction.begin().then(function () {
                var request = new sql.Request(transaction);
                request.query('INSERT INTO Location(City, Building, Room, Description) VALUES($21, $22, $23, $24)')
            .then(function () {
                    transaction.commit().then(function (recordSet) {
                        console.log(recordSet);
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
addLocation();

}
Add();