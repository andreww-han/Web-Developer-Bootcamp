//Check off specific todos by clicking

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});
//Delete button functionality

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut("fast",function(){$(this).remove();});
    event.stopPropagation();
});

//Add items to list

$("input[type = 'text']").keypress(function(event){
    if (event.which === 13){
        //Getting new todo from input
        var todo = $(this).val();
        $("ul").append("<li><span><i class='fas fa-trash'></i></span>  " + todo + "</li>");
        $(this).val("");
    }
});

$("#clear").click(function(){
    $("ul").empty();
});

$(".fa-plus").click(function(){
    $("input").fadeToggle();
})