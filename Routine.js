var userInput = {
    name: "Ethan",
    age: 17,
    weight: 170, // pounds
    currExercise: 5, // 5 hours a week
    hFeet = 6,
    hInches = 3,
    weightLossGoal: 10, // 10 pounds
    gender = "M", 

}
function BMI_Calculator(){
    var meters = 0.3048 * userInput.hFeet + 0.0254 * userInput.hInches;
    var Kgs = 0.453592 * userInput.weight;
    var BMI = Kgs / (meters * meters);
}

// function outputs the minimum exercise to maintain current weight 
function idealExercise(){
    if (BMI >= 25 && userInput.currExercise < 3.75){ // 45 minutes a day for 5 days
        console.log("Consider raising your exercise by at least " + 3.75 - userInput.currExercise + " hours.");
    }
    else if(BMI < 25 && userInput.currExercise < 2.5) { // 30 minutes a day for 5 days
        console.log("Consider raising your exercise by at least " + 3.75 - userInput.currExercise + " hours.");
    }
    else{
        console.log("Your workout plan fits your BMI to maintain current weight");
    }
}