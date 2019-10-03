var inventory = {};
var user_cart = [];
var items = 0;


// if (sessionStorage.getItem("userId") === null) {
//     window.location = "/login";
// } 

// IF USER IS LOGGED IN, HIDE LOG IN BUTTON
//  if (sessionStorage.getItem("userId")) {
//     $('#log-in-btn').text("Log Out");
//     $('#log-in-btn').attr("href", "/home")
//     $('#log-in-btn').attr("id", "log-out-btn")
// }

// $(document).on("click", "#log-out-btn", function(){
//     sessionStorage.clear();
// })

// Categories of items
$('.category').on("click", function () {
    getData(this.id)
})

function getData(thisid) {
    $.getJSON("/api/" + thisid, function (data) {
        $("#shoe-data").empty();

        console.log(data);

        for (var i = 0; i < data.length; i++) {
            inventory[data[i]._id] = data[i]
            var card = `
           
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <img class="card-img-top" src="${data[i].src}"/>
                        <h5 class="card-title">${data[i].designer}</h5>
                        <p class="card-text">${data[i].description}</p>
                        <p class="card-text price">Retail Price: $${data[i].retailPrice}</p>
                        <button class="btn btn-blue add-to-cart" id='bt${data[i]._id}'>Add to Cart</button>
                </div>
            </div>  
            
                        `
            $("#shoe-data").append(card);
        }
    });
}

// Individual add to cart buttons
$('#shoe-data').on("click", ".add-to-cart", function (event) {
    event.preventDefault();
    var this_id = $(this).attr("id");
    var item_id=this_id.substring(2);
    $('#' + this_id).hide();
    // if item already exists in cart
    if (user_cart.includes(item_id) && user_cart.length >= 3) {
        alert("Only 3 items allowed with your subscription plan!")
        return;
    } else {
        user_cart.push(item_id); 
    };
    console.log(user_cart);
    // console.log(user_cart.length);
    
    // UPDATE ITEM QUANTITY
   $("#item-count").html(user_cart.length);
});

// Shopping bag button
$("#cart").on("click", function () {
    $("#table tbody").empty();
    //inventory[user_cart[i]]  inventory is array of id = description
    var totalCost = 0;
    for (var i = 0; i < user_cart.length; i++) {
        var inventory_item = inventory[user_cart[i]];

       var row = "<tr><td>" + (i+1) + "</td><td>" + inventory_item["description"] + "</td><td>$" + inventory_item["retailPrice"] 
       row += "</td><td data-id='"+ user_cart[i] +"' class='remove-item'>X</td></tr>";

       $('#table').append(row);

       totalCost += inventory_item["retailPrice"];
       console.log(totalCost);

    }

    console.log(totalCost);
    var rowTotal = "<tr><td></td><td>Total:</td><td>$" + totalCost + "</td></tr>" + "<tr><td></td><td>Total Rental Package Price: <td>$69</td></tr>"
    $('#table').append(rowTotal);

    // Removes unwanted item from shopping bag
    $('.remove-item').on('click', function() {
        var item_id = $(this).data("id");
        var idx = user_cart.indexOf(item_id);
        user_cart.slice(idx, 1);
        $(this).parent().remove();
        $("#bt" + item_id).show();
    })
});


// Check out button w/in cart
$("#check-out").on("click", function() {
    console.log(user_cart);
    localStorage.setItem("cart", JSON.stringify(user_cart));
})

