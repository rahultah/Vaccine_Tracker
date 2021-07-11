function asd() {
    // console.clear();

    var date = document.getElementById("vacDate").value;
    var pin = document.getElementById("pincode").value;
    var res = date.split("-")
    var finalData;
    var temp;
    var err = document.getElementById("err");
    // console.log(res);
    var finalUrl = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=' + pin + '&date=' + res[2] + '-' + res[1] + '-' + res[0] + '';
    document.getElementById("maincont").innerHTML = ""
    $.ajax({
        url: finalUrl,
        datatype: 'JSON',
        type: 'GET',
        success: function(data) {
            // $(data.centers) = 
            $(data.centers).each(function(index, values) {
                finalData = values.name;
                console.log(data.centers)
                console.log(data.centers[index].sessions[0].vaccine)
                temp = data.centers[index].fee_type;
                if (typeof temp !== "undefined") {
                    err.style.display = "none";

                }

                // console.log(data.centers[index])
                // console.log(data.centers[index].vaccine_fees[0].vaccine)

                document.getElementById("maincont").innerHTML += "<div class='row my-row'> <div class='col-6 col-md-6 col-sm-6 my-col' > <div class='card' style=''> <div class='card-body'> <h5 class='card-title'>" + data.centers[index].name + "</h5> <p class='card-text'><strong><h5>Vaccine Name: - </h5></strong>" + data.centers[index].sessions[0].vaccine + "</p><br><p class='card-text'><strong><h5>Vaccine Fee: - </h5></strong>" + data.centers[index].fee_type + "</p><a href='https://www.cowin.gov.in/' class='btn btn-primary'>Book Slot</a> </div> </div> </div> <div class='col-6 col-md-6 col-sm-6 my-col' > <div class='card' style=''> <div class='card-body'> <h5 class='card-title'>" + data.centers[index + 1].name + "</h5> <p class='card-text'><strong><h5>Vaccine Name: - </h5></strong>" + data.centers[index].sessions[0].vaccine + "</p><br><p class='card-text'><strong><h5>Vaccine Fee: - </h5></strong>" + data.centers[index].fee_type + "</p> <a href=https://www.cowin.gov.in/' class='btn btn-primary'>Book Slot</a> </div> </div> </div> </div>"

            });
            // console.log(values);
        }
    });
    if (typeof temp == "undefined") {
        // console.log("not found");
        err.style.display = "block"
    }
    // console.log(finalData);
    // console.log(temp);
    // document.getElementById("maincont").innerHTML += 
    //           "<div class='row my-row'> <div class='col-6 col-md-6 col-sm-6 my-col' > <div class='card' style=''> <div class='card-body'> <h5 class='card-title'>"+finalData.name+"</h5> <p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p> <a href='#' class='btn btn-primary'>Go somewhere</a> </div> </div> </div> <div class='col-6 col-md-6 col-sm-6 my-col' > <div class='card' style=''> <div class='card-body'> <h5 class='card-title'>Card title2</h5> <p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p> <a href='#' class='btn btn-primary'>Go somewhere</a> </div> </div> </div> </div>";



}



function changedist() {
    document.getElementById("distser").style.display = "block";
    document.getElementById("pinser").style.display = "none";

}

function changepin() {
    document.getElementById("distser").style.display = "none";
    document.getElementById("pinser").style.display = "block";

}