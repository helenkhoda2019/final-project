$.ajax({
    method: "GET",
    url: '/api/dress'
})
.then(function(data) {
    console.log(data);
})

// $.getJSON("/dress"), function(data) {

// }