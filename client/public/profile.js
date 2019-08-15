$(document).ready(function() {
    
    const user_cart = JSON.parse(localStorage.getItem("cart"));
    console.log(user_cart);
    for (var i = 0; i < user_cart.length; i++) {
        $.getJSON("/api/cart/" + user_cart[i], function (data) {
            var card = `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <img class="img-thumbnail card-img-top" src="${data.src}"/>
                        <h5 class="card-title">${data.designer}</h5>
                        <p class="card-text">${data.description}</p>
                        <p class="card-text price">Retail Price: $${data.retailPrice}</p>
                        <button class="btn btn-gold rent-btn" data-id='${data._id}' id='bt${data._id}'>Rent Item</button>
                        <button class="btn btn-black return-btn" data-id='${data._id}' id='bt${data._id}'>Return Item</button>
                        <button class="btn btn-black" id='bt${data._id}'>Buy Now</button>
                </div>
            </div>        
                        `
            $("#checkout-data").append(card);

            // toggle return item button
            if (data.rented === false) {
                $('.return-btn').hide();
            } else {
                $('.return-btn').show();
               
            }
        })
    }   

    $(document).on('click', '.return-btn', function() {
        console.log("Return button clicked");
        // getting data-id property
        var id = $(this).data("id");
        console.log(id);
        $.post("/api/cart/return/" + id, function(data) {
            console.log(data);
            $('.return-btn').hide();
        })
    });

    // UPON CLICK OF RENT BUTTON, CHANGES STATE OF OBJECT IN DATABASE TO RENTED = TRUE
    $(document).on('click', '.rent-btn', function() {
        console.log("Rent button clicked");
        var id = $(this).data("id");
        console.log(id);
        $.post("/api/cart/rent/" +  id, function(data) {
            console.log(data);
            $('.rent-btn').hide();
        })
    })







});

