
  

$(document).ready(function () {
    const correctAnswer = "addisabeba";
    
    $("#submit").click(function () {
        const selectedAnswer = $("input[name='answer']:checked").val();
        
        if (selectedAnswer === correctAnswer) {
            $("#feedback").text("Correct! addisabeba is the capital of Ethiopia.");
            $("#feedback").css("color", "green");
        } else {
            $("#feedback").text("Incorrect. Try again.");
            $("#feedback").css("color", "red");
        }
    });
});

