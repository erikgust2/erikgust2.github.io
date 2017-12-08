$(function(){
    $("#knapp").click(function(){
        $("#info").toggle();
    });
    $("li").dblclick(function(){
        $(this).toggleClass("selected");
    });       
    $("#bgcolor").change(function(){
       $("body").css("background-color", $(this).val()); 
    });
    $("#rubrik").focusout(function(){
       $("h1").text($(this).val());
    });
    $("#txtcolor").change(function(){
       $("#rubrik").css("color", $(this).val()); 
    });
    

});