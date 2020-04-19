function Move2(query,data,h,res){
    var logo=`<h1 class="logo"></h1><link rel="stylesheet" type="text/css" href="../css/style.css">`;
    var table='</link><table class="Report">';
    let row='';
    let rowhead='';

    if(query==='Artwork by Artwork Name'){         
        for (let j=0; j<data.recordset.length;j++){					
            rowhead='<tr><th>Image</th><th>Art ID</th><th>Description</th><th>Collection</th><th>Status</th><th>Type</th><th>Media</th><th>Location ID</th><th>Artist ID</th><th>Artist First Name</th><th>Artist Last Name</th></tr>'
            row=row + '<tr>' + '<td style="width:100px;">' + data.recordset[j].url + '</td>' + '<td style="width:100px;">' + data.recordset[j].ArtID + '</td>' + '<td style="width:100px;">' + data.recordset[j].Description + '</td>' + '<td style="width:100px;">' + data.recordset[j].Collection + '</td>' + '<td style="width:100px;">' + data.recordset[j].Status + '</td>' + '<td style="width:100px;">' + data.recordset[j].Type + '</td>' + '<td style="width:100px;">' + data.recordset[j].Media + '</td>' + '<td style="width:100px;">' + data.recordset[j].LocationID + '</td>' + '<td style="width:100px;">' + data.recordset[j].ArtistID + '</td>' + '<td style="width:100px;">' + data.recordset[j].FName + '</td>' + '<td style="width:100px;">' + data.recordset[j].LName + '</td>'
    }}
    if(query==='Artwork By Location Name'){         
        for (let j=0; j<data.recordset.length;j++){					
            rowhead='<tr><th>Image</th><th>Art ID</th><th>Title</th><th>Description</th><th>Media</th><th>Type</th></tr>'
            row=row + '<tr>' + '<td style="width:100px;">' + data.recordset[j].url + '</td>' + '<td style="width:100px;">' + data.recordset[j].ArtID + '</td>' +  '<td style="width:100px;">' + data.recordset[j].Title + '</td>' + '<td style="width:100px;">' + data.recordset[j].Description + '</td>' + '<td style="width:100px;">' + data.recordset[j].Media + '</td>' + '<td style="width:100px;">' + data.recordset[j].Type + '</td>'
    }}

    table=table+rowhead+row+ '</table>';

    var html = `<h1 align="center">Move Artwork</h1>


    <button class="btn" data-modal="NewLocation">New Location</button>
    <br>
    <br>
    <button class="btn" data-modal="Gift">Gift Artwork</button>
    <br>
    <br>
    <button class="btn" data-modal="Loan">Loan Artwork</button>
    <br>
    <br>
    <button class="btn" data-modal="Return">Return Loan</button>


    <div id="NewLocation" class="modal">
    <div class="modal-content">
    <div class="popup">
        <a class="close">&times;</a>
        <form method="POST" action="/move-form-results">
        <section class="Art New Location Information">
        <h2>New Location</h2>
        <div>
            <label for="ArtID">Art ID</label>
            <input type="number" name="ArtID" id="ArtID" min="0" max="9999999">
            <br>
            <label for="City">City</label>
                <select name="City" id="City" required>
                <option value="Anchorage">Anchorage</option>
                <option value="Nome">Nome</option>
            </select>
        <br>
        <br>
            <label for="Building">Building</label>
            <select name="Building" id="Building" required>
                <option value="Anchorage">Anchorage1</option>
                <option value="Nome">Nome1</option>
            </select>
        <br>
        <br>

            <label for="Floor">Floor</label>
            <input type="number" name="Floor" id="Floor" min="1" max="9999999">
            <label for="Room">Room</label>
            <input type="number" name="Room" id="Room" min="1" max="9999999">
            <br>
            <label for="Description">Description</label>
            <textarea id="Description" name="Description" rows="3" cols="40" placeholder="Additional Location Details"></textarea>

            <input type="hidden" id= ButtonID name="ButtonID" value="1" >
            <button type="submit" href="/">Submit</button>
        </div>
        </section>
        </form>
    </div>
    </div>
    </div>
    <!--Gift Artwork-->
    <div id="Gift" class="modal">
    <div class="modal-content">
    <div class="popup">
        <a class="close">&times;</a>
        <form method="POST" action="/move-form-results">
        <section class="Gift">
        <h2>Gift Artwork</h2>
        <div>
                <label for="ArtID">Art ID</label>
                <input type="number" name="ArtID" id="ArtID" min="0" max="9999999">
            <br>
                            <label for="Date">Gift Date</label>
                <input type="date" name="Acquiredt" id="Acquiredt">
            <br>
                        <label for="Description">Description</label>
                <textarea id="Description" name="Description" rows="3" cols="40"></textarea>
        </section>
    <h4>Recipient Information:</h4>
        <section class="Recipient Information">
                <label for="FName">First name</label>
                <input type="text" name="Fname" id="Fname" minlength="1" maxlength="50">
            <br>
                    <label for="LName">Last name</label>
                <input type="text" name="Lname" id="Lname" minlength="1" maxlength="50">
            <br>
                    <label for="Phone">Phone number (with area code)</label>
                <input type="tel" name="Phone" id="Phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
            <br>
                <label for="Email">Email</label>
                <input type="text" name="Email" id="Email">
            <br>

                <label for="Address1">Primary address</label>
                <input type="text" name="Address1" id="Address1">
            <br>
                <label for="Address2">Alternate address</label>
                <input type="text" name="Address2" id="Address2">
            <br>
                <label for="City">City</label>
                <input type="text" name="City" id="City" maxlength="50">
            <br>
                <label for="State">State</label>
                <input type="text" name="State" id="State" minlength="3" maxlength="50">
            <br>
                <label for="Zip">Zip code</label>
                <input type="text" name="Zip" id="Zip" minlength="5" maxlength="5">
            <br>
                <input type="hidden" id= ButtonID name="ButtonID" value="2" >
                <button type="submit" href="/">Submit</button>
            </section>
        </div>
        </form>
    </div>
    </div>
    </div>
    <!--Loan Artwork-->
    <div id="Loan" class="modal">
    <div class="modal-content">
    <div class="popup">
        <a class="close">&times;</a>
        <form method="POST" action="/move-form-results">
        <section class="Loan Artwork">
        <h2>Loan Artwork</h2>
        <div>
            <section class="Loan Date">
                    <label for="ArtID">Art ID</label>
                    <input type="number" name="ArtID" id="ArtID" min="0" max="9999999">
                <br>
                    <label for="Date">Loan Date Out</label>
                    <input type="date" name="Acquiredt" id="Acquiredt">
                <br>
                    <label for="Date">Requested Return Date</label>
                    <input type="date" name="Acquiredt" id="Acquiredt">
                <br>
                    <label for="Description">Description</label>
                    <textarea id="Description" name="Description" rows="3" cols="40"></textarea>
            </section>
        <h4>Recipient Information:</h4>
            <section class="Recipient Information">
                    <label for="FName">First name</label>
                    <input type="text" name="Fname" id="Fname" minlength="1" maxlength="50">
                <br>
                    <label for="LName">Last name</label>
                    <input type="text" name="Lname" id="Lname" minlength="1" maxlength="50">
                <br>
                    <label for="Phone">Phone number (with area code)</label>
                    <input type="tel" name="Phone" id="Phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
                <br>
                    <label for="Email">Email</label>
                    <input type="text" name="Email" id="Email">
                <br>
                    <label for="Address1">Primary address</label>
                    <input type="text" name="Address1" id="Address1">
                <br>
                    <label for="Address2">Alternate address</label>
                    <input type="text" name="Address2" id="Address2">
                <br>
                    <label for="City">City</label>
                    <input type="text" name="City" id="City" maxlength="50">
                <br>
                    <label for="State">State</label>
                    <input type="text" name="State" id="State" minlength="3" maxlength="50">
                <br>
                    <label for="Zip">Zip code</label>
                    <input type="text" name="Zip" id="Zip" minlength="5" maxlength="5">
                <br>
                    <input type="hidden" id= ButtonID name="ButtonID" value="3" >
                    <button type="submit" href="/">Submit</button>
                </section>
                </section>
                </div>
            </form>
            </div>
        </div>
    </div>
    </div>
    <!--Return Artwork-->
    <div id="Return" class="modal">
    <div class="modal-content">
    <div class="popup">
        <a class="close">&times;</a>
        <form method="POST" action="/move-form-results">
        <section class="Return">
            <h2>Return Artwork</h2>
        <div>
            <section class="Return">
            <label for="ArtID">Art ID</label>
            <input type="number" name="ArtID" id="ArtID" min="0" max="9999999">
            <br>
                <label for="Date">Return Date</label>
                <input type="date" name="Acquiredt" id="Acquiredt">
        </section>
            <h4>New Artwork Location:</h4>
        <section class="Art New Location Information">
                <label for="City">City</label>
                    <select name="City" id="City" required>
                        <option value="Anchorage">Anchorage</option>
                        <option value="Nome">Nome</option>
                    </select>
            <br>
            <br>
                <label for="Building">Building</label>
                    <select name="Building" id="Building" required>
                        <option value="Anchorage">Anchorage1</option>
                        <option value="Nome">Nome1</option>
                    </select>
            <br>
            <br>
                <label for="Floor">Floor</label>
                <input type="number" name="Floor" id="Floor" min="1" max="9999999">
            <br>
                <label for="Room">Room</label>
                <input type="number" name="Room" id="Room" min="1" max="9999999">
            <br>
                <label for="Description">Any extra information?</label>
                <textarea id="Description" name="Description" rows="3" cols="40"></textarea>
            <br>
                <input type="hidden" id= ButtonID name="ButtonID" value="4" >
                <button type="submit" href="/">Submit</button>
                </section>
            </div>
            </section>
        </form>
        </div>
    </div>
    </div>

    <script>
    var modalBtns = [...document.querySelectorAll(".btn")];
    modalBtns.forEach(function(btn){
    btn.onclick = function() {
        var modal = btn.getAttribute('data-modal');
        document.getElementById(modal).style.display = "block";
    }
    });

    var closeBtns = [...document.querySelectorAll(".close")];
    closeBtns.forEach(function(btn){
    btn.onclick = function() {
        var modal = btn.closest('.modal');
        modal.style.display = "none";
    }
    });

    window.onclick = function(event) {
    if (event.target.className === "modal") {
        event.target.style.display = "none";
    }
    }
    </script>`
    res.send(logo+h+table+html);
};
module.exports=Move2;