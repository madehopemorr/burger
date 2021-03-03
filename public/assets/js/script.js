$(document).ready(function() {
    $(".form-devour").on("submit", function(event) {
        event.preventDefault();

        var burgerId = $(this).children(".burgerId").val();
        console.log(burgerId);
        $.ajax({
            method: "PUT",
            url: "/api/burgers/" + burgerId
        }).then(function(data) {

            location.reload();
        });

        // $.ajax({
        //     method: "POST",
        //     url: "/api/burgers"
        // }).then(function(data) {

        //     location.reload();
        // });
    });
});