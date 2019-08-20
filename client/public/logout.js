if (sessionStorage.getItem("userId")) {
    $('#log-in-btn').text("Log Out");
    $('#log-in-btn').attr("href", "/home")
    $('#log-in-btn').attr("id", "log-out-btn")
}

$(document).on("click", "#log-out-btn", function(){
    sessionStorage.clear();
})