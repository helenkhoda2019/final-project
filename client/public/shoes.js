$.getJSON("/api/shoes", function(data) {

    console.log(data);
    
    for (var i = 0; i < data.length; i++) {
        $("#shoes").append(data);
        // data.addClass("card");
        // var photo = data[i].src;
        // $(".card-img-top").append("img src=" + photo + "/>");
        var designer = data[i].designer;
        $(".card-title").append(designer);
        var description = data[i].description;
        $(".card-text").append(description);
        var price = data[i].retailPrice;
        $(".price").append(price);
        
        //  "Description: " + data[i].description + "Retail Price: " + data[i].retailPrice + "Photo:" + "<img src=" + data[i].src + "/>")
    }
  });