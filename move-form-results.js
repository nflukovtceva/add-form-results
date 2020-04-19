function MoveResults(req,res) {
    var sql= require("mssql");

    var config = {
        user: 'bsnc',
        password: 'W3passwd',
        server: 'localhost',
        database: '489_BAMS',
        port: 1433
    };
    
    if(req.ButtonID===1){
        var sqlQuery=`Select LocationID from Location
						Where Location.City= '${req.City}'
						And Location.Building= '${req.Building}'
                        And Location.Room= '${req.Room}';`
        var sqlQuery2=`Update Art
                        Set LocationID = 1002
                        Where ArtID = ${req.ArtID}`  
                        }
};
module.exports=MoveResults