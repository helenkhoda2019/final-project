$(document).ready(function() {
    
    const user_cart = JSON.parse(localStorage.getItem("cart"));
    console.log(user_cart);
    function fillCart() {
        $("#checkout-data").empty();
        for (var i = 0; i < user_cart.length; i++) {
            $.getJSON("/api/cart/" + user_cart[i], function (data) {
                var card = `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <img class="img-thumbnail card-img-top" src="${data.src}"/>
                            <h5 class="card-title">${data.designer}</h5>
                            <p class="card-text">${data.description}</p>
                            <p class="card-text price">Retail Price: $${data.retailPrice}</p>
                            <button data-toggle="modal" data-target="#confirmRentModal" class="btn btn-blue rent-btn" data-id='${data._id}' id='rb${data._id}'>Rent Item</button>
                           
                            <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=79Y9XJFM5TKQU" class="btn btn-yellow" role="button" id='bt${data._id}'>Buy Now</a>
                    </div>
                </div>        
                            `
                $("#checkout-data").append(card);
    
                // toggle return item button
                if (data.rented === false) {
                    $('#eb' + data._id).hide();
                    $('#rb' + data._id).show();
                } else {
                    $('#eb' + data._id).show();
                    $('#rb' + data._id).hide();
                   
                }
            })
        }
    }

    fillCart();

    // $.getJSON("api/user/profile/" + sessionStorage.getItem("userId"), function(data){
    //     $("#pro-email").text(data.itemsRented[0].description);
    // })  

    $(document).on('click', '.return-btn', function() {
        console.log("Return button clicked");
        // getting data-id property
        var currentUser = {
            userId: sessionStorage.getItem("userId")
        }
        var id = $(this).data("id");
        console.log(id);
        $.post("/api/cart/return/" + id, currentUser, function(data) {
            console.log(data);
            // $('.return-btn').hide();
            // $('.rent-btn').show();
            fillCart();
        })
    });

    // UPON CLICK OF RENT BUTTON, CHANGES STATE OF OBJECT IN DATABASE TO RENTED = TRUE
    $(document).on('click', '.rent-btn', function() {
        var currentUser = {
            userId: sessionStorage.getItem("userId")
        }
        console.log("Rent button clicked");
        var id = $(this).data("id");
        console.log(id);
        $.post("/api/cart/rent/" +  id, currentUser, function(data) {
            console.log(data);
            // $('.rent-btn').hide();
            // $('.return-btn').show();
            fillCart();
        })
    })

});

