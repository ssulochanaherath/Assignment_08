$(document).ready(function() {
    var array = ["red", "green", "blue", "yellow", "pink", "deeppink"];
    var myInterval = null;

    function replaceColours() {
        let lastColour = array.pop();
        array.unshift(lastColour);

        for (let i = 0; i < array.length; i++) {
            $("#clr" + (i + 1)).css({background: array[i]});
        }
    }

    $("#startButton").on("click", function() {
        if (!myInterval) {
            replaceColours();
            myInterval = setInterval(replaceColours, 800);
        }
    });

    $("#stopButton").on("click", function() {
        clearInterval(myInterval);
        myInterval = null;
    });
});
