var itemsRented;

$.getJSON("api/user/profile/" + sessionStorage.getItem("userId"), function (data) {
    $("#pro-username").append(data.firstName);
    itemsRented = data.itemsRented;
})


$(document).ready(function () {

    function fillProfile() {
        $("#profile-data").empty();
        $.getJSON("/api/user/profile/" + sessionStorage.getItem("userId"), function (data) {
            for (var i = 0; i < data.itemsRented.length; i++) {
                var card = `

                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src="${data.itemsRented[i].src}" class="card-img" alt="item">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${data.itemsRented[i].designer}</h5>
                                <p class="card-text">${data.itemsRented[i].description}</p>
                                <p class="card-text">$${data.itemsRented[i].retailPrice}</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                <button class="btn btn-pink return-btn" data-id='${data.itemsRented[i]._id}' id='eb${data.itemsRented[i]._id}'>Return Item</button>

                                <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=79Y9XJFM5TKQU" class="btn btn-yellow" role="button" id='bt${data._id}'>Buy Now</a>

                                </div>
                            </div>
                            </div>
                            </div>

                            `
                $("#profile-data").append(card);

            }
        })
    };

    fillProfile();
});