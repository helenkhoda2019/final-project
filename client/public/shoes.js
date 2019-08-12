var inventory = {};
var user_cart = [];
var items = 0;

$('.category').on("click", function() {
getData(this.id)
})

function getData (thisid) {


$.getJSON("/api/" + thisid, function(data) {
    $("#shoe-data").empty();

    console.log(data);
    
    for (var i = 0; i < data.length; i++) {
        inventory[data[i]._id] = data[i].description
        var card = `
            <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="card" style="width: 18rem;">
                                        <img class="card-img-top" src="${data[i].src}"/>
                                            <h5 class="card-title">${data[i].designer}</h5>
                                            <p class="card-text">${data[i].description}</p>
                                            <p class="card-text price">Retail Price: $${data[i].retailPrice}</p>
                                            <button class="btn btn-primary add-to-cart" data-id=${data[i]._id}>Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
            $("#shoe-data").append(card);
        }
     });
    }

  
    
    // Individual add to cart buttons
     $('#shoe-data').on("click", ".add-to-cart", function(event) {
       event.preventDefault();
    
       var item_id = $(this).data("id");
        // if item already exists in cart
       if (user_cart.includes(item_id)) {
          return;
       } else {
       user_cart.push(item_id);
        };

        console.log(user_cart);
    
     });

     $("#cart").on("click", function() {
         $("#shoe-data").empty();
         var section =  $("#shoe-data");
         for (var i = 0; i < user_cart.length; i++ ) {
            $(section).append("<div>" + inventory[user_cart[i]] + "</div>");
         }
     })

    