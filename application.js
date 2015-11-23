$(document).ready(function() {
	for(var x=0; x<16; x++) {
    	for(var y=0; y<16; y++) {
            $("body").append("<div class='gridSquare'>foo</div>");
        }
    $("body").append("<br>");
    }
});

$(document).ready(function(){
    $("button").click(function(){
        newGrid();
    });
});

$(document).ready(function(){
    $(document).on("mouseenter", ".gridSquare", function(){
        $(this).css("background-color", "blue");
    });
});

function newGrid(){
    $(".gridSquare").css("background-color", "white");
    
    var width = prompt("Enter a number that is <=90 for the width of the new grid.");
    
    if(width > 90){
        alert("That number is greater than 90.");
    }else{
        var height = prompt("Enter a number that is <=40 for the height of the new grid.");

        if(height > 40){
            alert("That number is greater than 40.");
        }else{
            for(var x=0; x<width; x++){
                for(var y=0; y<height; y++){
                    $("body").append("<div class='gridSquare'>foo</div>");
                }
                $("body").append("<br>");
            }
        }
    }
}