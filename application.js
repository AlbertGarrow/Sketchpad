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
    	$(".gridSquare").css("background-color", "white");
        var width = prompt("Enter a width for the new grid.");

        if(width > 90){
            newGridWidthError();
        }else{
            var height = prompt("Enter a height for the new grid.");

            if(height > 40){
                newGridHeightError();
            }

            $(".gridSquare").remove();

            for(var x=0; x<width; x++){
                for(var y=0; y<height; y++){
                    $("body").append("<div class='gridSquare'>bar</div>");
                }
            $("body").append("<br>");
            }
        }

    });
});

$(document).ready(function(){
    $(".gridSquare").hover(function(){
        $(this).css("background-color", "blue");
    });
});


function newGridWidthError(){
    alert("Width needs to be <=90");
}

function newGridHeightError(){
    alert("Height needs to be <=40");
}