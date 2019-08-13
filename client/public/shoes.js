var inventory = {};
var user_cart = [];
var items = 0;

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
            <div class="card" id="shoe-data" style="width: 18rem;">
                <div class="card-body">
                    <img class="card-img-top" src="${data[i].src}"/>
                        <h5 class="card-title">${data[i].designer}</h5>
                        <p class="card-text">${data[i].description}</p>
                        <p class="card-text price">Retail Price: $${data[i].retailPrice}</p>
                        <button class="btn btn-primary add-to-cart" id='bt${data[i]._id}'>Add to Cart</button>
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

    var item_id = $(this).data("id");
    // if item already exists in cart
    if (user_cart.includes(item_id)) {
        return;
    } else {
        user_cart.push(item_id);
        // remove button with that item_id or data-id
    };

    console.log(user_cart);

});

// Shopping bag button

$("#cart").on("click", function () {
    $("#table tbody").empty();
    //inventory[user_cart[i]]  inventory is array of id = description
    for (var i = 0; i < user_cart.length; i++) {
        var inventory_item = inventory[user_cart[i]]
       var row = "<tr><td>" + (i+1) + "</td><td>" + inventory_item["description"] + "</td><td>" + inventory_item["retailPrice"] 
       row += "</td><td data-id='"+ user_cart[i] +"' class='remove-item'>X</td></tr>";
       $('#table').append(row);
    }

    $('.remove-item').on('click', function() {
        var item_id = $(this).data("id");
        var idx = user_cart.indexOf(item_id);
        user_cart.slice(idx, 1);
        $(this).parent().remove();
    })
});


// $("#cart").on("click", function () {
//     // empties current section/div
//     $("#shoe-data").empty();
//     // section called with id of shoe-data
//     var section = $("#shoe-data");
//     // iterate through user_cart array of id's 
//     for (var i = 0; i < user_cart.length; i++) {
//         // append inventory object with that particular user_cart id
//         $(section).append("<div>" + inventory[user_cart[i]] + "</div>");
//     }
// })