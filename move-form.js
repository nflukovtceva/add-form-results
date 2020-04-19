function Move(req,res){
    /* Module imports and variables form URL Post */
        var Move2 = require('./move-form-2.js');
        const urlParams = new URLSearchParams(req);
        const params = Object.fromEntries(urlParams);

        if(req.ButtonID==='Artwork by Artwork Name'){
            var query = req.ButtonID
            var sqlQuery=`Select Images.url, Art.ArtID, Art.Description, Art.Collection, Art.Status, Art.Type, Art.Media, Art.LocationID ,Artist.ArtistID, Artist.FName, Artist.LName
                            From Art
                            Join Record on Art.ArtID=Record.ArtID
                            Join Artist on Record.ArtistID=Artist.ArtistID
                            Left join Images on Art.ArtID=Images.ArtID
                            Where Art.Title Like '%${req.Title}%';`	   
            var h=`<h2>Artwork similar to the title ${req.Title}</h2>`
        }
        if(req.ButtonID==='Artwork By Location Name'){
            var query = req.ButtonID
            var sqlQuery=`Select Images.url, Art.ArtID, Art.Title, Art.Description, Art.Media, Art.Type
                            From Art
                            Join Location on Art.locationID=Location.LocationID
                            Left Join Images on Art.ArtID=Images.ArtID
                            Where Location.City= '${req.City}'
                            And Location.Building= '${req.Building}'
                            And Location.Room= '${req.Room}';`
            var h=`<h2>Artwork in ${req.City}/${req.Building}/${req.Room}</h2>`
        }

        /* SQLserver connection config */
	const sql= require("mssql");	
	const config = {
		user: 'bsnc',
		password: 'W3passwd',
		server: 'localhost',
		database: '489_BAMS',
		port: 1433
	};
	/* SQLserver connection function */
	sql.connect(config, function (err) {
		if (err) console.log(err);
		let sqlRequest =  new sql.Request();	
		sqlRequest.query(sqlQuery, function (err,data) {	
			if (err) console.log(err)
				Move2(query,data,h,res)
			sql.close();			
		});
	});
};
module.exports=Move;