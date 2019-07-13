
$(function () {



    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        var newOrder = {
            name: $("#newBurgerName").val().trim(),
        };
        $.ajax({
            type: "POST",
            url: "/",
            data: newOrder
        }).then(function () {
            console.log("Added new burger!");
            location.reload();
        })
    });

    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        console.log("updating burger with id: ", id);
        var newDevoured = $(this).data("newdevoured");
        var customerName = $("#customerName").val().trim()

        var newDevouredStat = {
            devoured: newDevoured,
            id: id,
            customerName: customerName
        };
        console.log(newDevouredStat);
        
        $.ajax({
            type: "PUT",
            url: "/api/burger/" + id,
            data: newDevouredStat
        }).then(function () {
            location.reload();
        });
    });

    $(".delete-burger").on("click", function (event) {
        var id = $(this).data("id");
        console.log("Deleting burger with burger ID: ", id);

        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(function () {

            console.log("deleted burger ", id);

            location.reload();
        })

    })
})