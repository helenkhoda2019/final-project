$.getJSON("/api/shoes", function(data) {

    console.log(data);
    
    for (var i = 0; i < data.length; i++) {
        var card = `
            <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="card" style="width: 18rem;">
                                        <img src="${data[i].src}"/>
                                            <h5 class="card-title">${data[i].designer}</h5>
                                            <p class="card-text">${data[i].description}</p>
                                            <p class="card-text price">Retail Price: ${data[i].retailPrice}</p>
                                            <button class="btn btn-primary" data-id=${data[i]._id}>Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
            $("#shoe-data").append(card);
        }
     });