var userInput = {
  age: 20,
  height: 72, // In inches
  weight: 150, // In pound
  gender: "male",
  currExercise: 5, //Hours per week
  idealBMI: 22,
}

function BMICalc() {
  hMeters = userInput.height / 39.37 // inches to meters
  wKg = userInput.weight / 2.205 // lb to pounds
  //BMI formula: kg/m^2
  return wKg / (hMeters * hMeters)
}


function WorkoutPlan() {
  var BMI = BMICalc()
  //UnderWeight BMI
  if(BMI <= 18.5) {
    userInput.currExercise = 6
    console.log("Your BMI indicates your underweight. You might want to start with weight training for " + userInput.currExercise + "hours a week!")
    //Normal Weight BMI
  } else if (BMI > 18.5 && BMI <= 24.9 ) {
    console.log("Your BMI is at a normal weight. Keep going with your workout plan for " + userInput.currExercise + " hours a week!")
    //Overweight BMI
  } else if(BMI > 25 && BMI <= 29.9){
    userInput.currExercise = 8
    console.log("Your BMI indicates your overweight. You might want to start doing more cardio for " + userInput.currExercise + " hours a week!")
  } else {
    userInput.currExercise = 10
    console.log("Your BMI indicates you are Obese. You might want to do both weight training and cardio for " + userInput.currExercise + " hours a week!")
  }
} 

console.log(BMICalc())
console.log(WorkoutPlan())