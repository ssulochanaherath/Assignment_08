var array = ["red" , "green" , "blue" , "yellow" , "pink" , "deeppink"];

function replaceColours() {
    let lastColour = array.pop();
    array.unshift(lastColour);

    $("#clr1").css({background:array[0]});
    $("#clr2").css({background:array[1]});
    $("#clr3").css({background:array[2]});
    $("#clr4").css({background:array[3]});
    $("#clr5").css({background:array[4]});
    $("#clr6").css({background:array[5]});
}

setInterval(replaceColours,800);