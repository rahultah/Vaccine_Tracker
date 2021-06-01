function asd()
{
    // console.clear();
    
    var date = document.getElementById("vacDate").value;
    var pin = document.getElementById("pincode").value;
    var res = date.split("-")
    var finalData;
    // console.log(res);
    var finalUrl = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode='+pin+'&date='+res[2]+'-'+res[1]+'-'+res[0]+'';
    document.getElementById("maincont").innerHTML = ""
    $.ajax({
        url: finalUrl,
        datatype: 'JSON',
        type: 'GET',
        success: function(data)
        {
            // $(data.centers) = 
            $(data.centers).each(function(index,values)
            {
                finalData = values.name;
                // console.log(finalData.names)
                // console.log(finalData)
                console.log(data.centers[index])
                
                document.getElementById("maincont").innerHTML+= "<div class='row my-row'> <div class='col-6 col-md-6 col-sm-6 my-col' > <div class='card' style=''> <div class='card-body'> <h5 class='card-title'>"+data.centers[index].name+"</h5> <p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p> <a href='#' class='btn btn-primary'>Go somewhere</a> </div> </div> </div> <div class='col-6 col-md-6 col-sm-6 my-col' > <div class='card' style=''> <div class='card-body'> <h5 class='card-title'>"+data.centers[index+1].name+"</h5> <p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p> <a href='#' class='btn btn-primary'>Go somewhere</a> </div> </div> </div> </div>"
                
            });
            // console.log(values);
        }
    });
    console.log(finalData);
    // document.getElementById("maincont").innerHTML += 
    //           "<div class='row my-row'> <div class='col-6 col-md-6 col-sm-6 my-col' > <div class='card' style=''> <div class='card-body'> <h5 class='card-title'>"+finalData.name+"</h5> <p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p> <a href='#' class='btn btn-primary'>Go somewhere</a> </div> </div> </div> <div class='col-6 col-md-6 col-sm-6 my-col' > <div class='card' style=''> <div class='card-body'> <h5 class='card-title'>Card title2</h5> <p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p> <a href='#' class='btn btn-primary'>Go somewhere</a> </div> </div> </div> </div>";
    
                

}

 

// function asd()
// {
//     for(i=0;i<len;i++)
//     {
//         console.log(dat.centers[i].name);
//     }
// }