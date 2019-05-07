$(function(){
    //devour function on click
    $(".change-eaten").on("click", function(event){
        event.preventDefault();
        var id = $(this).data("id");
        console.log(id);
    

    $.ajax("/api/" + id, {
        type: "PUT",
    }).then(
        function(){
            console.log("this happened");
            location.reload();
        }
    )
    });

    //submit new burger function on click
})