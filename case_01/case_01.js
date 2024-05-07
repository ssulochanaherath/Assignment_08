var array = ["A","B","C","D","E","F"];

var myInterval = null;

function replaceValues() {

    let lastValue = array.pop();
    array.unshift(lastValue);

    $("#div1").text(array[0]);
    $("#div2").text(array[1]);
    $("#div3").text(array[2]);
    $("#div4").text(array[3]);
    $("#div5").text(array[4]);
    $("#div6").text(array[5]);
}

// setInterval(replaceValues, 800);

$("#startButton").on("click",function () {
    myInterval = setInterval(replaceValues, 800);
});

$("#stopButton").on("click",function () {
    clearInterval(myInterval);
});