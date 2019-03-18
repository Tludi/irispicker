

function resetSquareColours() {
    for (var i = 0; i < 45; i++) {
        // if (i == 12)
            // scontinue;
        var currentSquare = document.getElementById("sq" + i);
        currentSquare.style.backgroundColor = "#ffffff";
    }
    return;
}

function markSquare(square) {
    var currentSquare = document.getElementById(square);
    if (currentSquare.style.backgroundColor == "black") 
        currentSquare.style.backgroundColor = "#ffffff";
    else
        currentSquare.style.backgroundColor = "black";
    return;
}














