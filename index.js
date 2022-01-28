  
  //Setting button to execute bmr function
  document.getElementById("bmr").addEventListener("click", BMR_Calc);
  
  function BMR_Calc() {
    //Male

    var bmrName = document.getElementById("name").value

    if(document.getElementById("sex").value == "male") {

      //Mifflin St-Jeor Equation
      var bmrMale = 10*(document.getElementById("weight").value) + 6.25*(document.getElementById("height").value) - 5*(document.getElementById("age").value) + 5;
        
        //setting value for bmr male to result label
      document.getElementById("result").innerHTML = bmrName + " your BMR is " + bmrMale
      
      //returning value for workout function
      return(bmrMale)
    } else {//Female

      //printing values on console
      var bmrFemale = 10*(document.getElementById("weight").value) + 6.25*(document.getElementById("height").value) - 5*(document.getElementById("age").value) - 161;
      
      document.getElementById("result").innerHTML = bmrName + " your BMR is " + bmrFemale;

      //returning value for workout function
      return(bmrFemale)
    }
  }
//Setting variable to value of function
var bmr = BMR_Calc()


document.getElementById("bmi").addEventListener("click", BMI_Calc);

function BMI_Calc() {
  //Setting Variables
  var wK = document.getElementById('weight').value / 2.205;
  var hM = document.getElementById('height').value / 39.3701;
  var bmiName = document.getElementById("name").value
  //setting variable to bmi value
  var bmiResult = Math.round(wK/(hM*hM))
  
  // setting result label to bmi result
  document.getElementById("result").innerHTML = bmiName + " your bmi is " + bmiResult

  return bmiResult
  // return wK/(hM*hM);
}

//setting bmi to value of BMI_Calc
var bmi = BMI_Calc()


document.getElementById('iw').addEventListener('click', IdealWeight);

//Ideal Weight function
function IdealWeight() {
  //setting variable height and name
  var iwHeight = document.getElementById('height').value
  var iwName = document.getElementById("name").value

  var iwResult = Math.round(22 * (iwHeight * 0.0254) * (iwHeight * 0.0254) * 2.20462) //weight(lb) = ideal BMI(22) * height(in meters) * height(in meters) * 2.20462 (kilos to pounds)
  document.getElementById("result").innerHTML = iwName + " your ideal weight is" + iwResult
}

//Setting workout button to run WorkoutTing function
document.getElementById('workout').addEventListener('click', WorkoutTing);

//Seperate function to run workout plan functions at button
function WorkoutTing() {
  Monday()
  Tuesday()
  Wednesday()
  Thursday()
  Friday()
}


function Monday() {
  //setting values of functions to be used in algorithm
  bmi = BMI_Calc()
  bmr = BMR_Calc()
  //using let so that it can keep being reused in later functions
  let minutes = 0
  let burnCal = Math.round(.2 * bmr)
  let description = "Weights (Focus on upper and lower body exercises)"

  //if else statements with bmi to determine time needed to workout
  if (bmi <= 18.5) {
    minutes = 40
  } else if (bmi > 18.5 && bmi <= 24.9) {
    minutes = 30
  } else if (bmi > 24.9 && bmi < 30) {
    minutes = 45
  } else {
    minutes = 60
  }

  document.getElementById("mon").innerHTML = description + " for " + minutes + " minutes to burn " + burnCal + " calories."
};

//tuesday function
function Tuesday() {

   let minutes = 0
   let burnCal = Math.round(.1 * bmr)
   let description = "Aerobics (Focus on walking, swimming, and running) "

    if (bmi <= 18.5) {
      minutes = 10
    } else if (bmi > 18.5 && bmi <= 24.9) {
      minutes = 20
    } else if (bmi > 24.9 && bmi < 30) {
      minutes = 25
    }
    else {
      minutes = 40
     }

  document.getElementById("tue").innerHTML = description + " for " + minutes + " minutes to burn " + burnCal + " calories."
};

function Wednesday() {

  let minutes = 0
  let burnCal = Math.round(.17 * bmr)
  let description = "Calisthenics (Focus on excercises that rely on your body weight)"

  if (bmi <= 18.5) {
    minutes = 35
  } else if (bmi > 18.5 && bmi <= 24.9) {
    minutes = 30
  } else if (bmi > 24.9 && bmi < 30) {
    minutes = 40
  } else {
    minutes = 50
  }

  document.getElementById("wed").innerHTML = description +  " for " + minutes + " minutes to burn " + burnCal + " calories."
};

function Thursday() {
  let minutes = 0
  let burnCal = Math.round(.15 * bmr)
  let description = "Jogging (Try to run for as long as you can at a steady pace)"

  if (bmi <= 18.5) {
    minutes = 25
  } else if (bmi > 18.5 && bmi <= 24.9) {
    minutes = 30
  } else if (bmi > 24.9 && bmi < 30) {
    minutes = 45
  } else {
    minutes = 55
  }

  document.getElementById("thu").innerHTML = description + " for " + minutes + " minutes to burn " + burnCal + " calories."
};

function Friday() {
  let minutes = 0
  let burnCal = Math.round(.2 * bmr)
  let description = "Sports (Play your favorite sport for the time specified)"

  if (bmi <= 18.5) {
    minutes = 30
  } else if (bmi > 18.5 && bmi <= 24.9) {
    minutes = 45
  } else if (bmi > 24.9 && bmi < 30) {
    minutes = 50
  } else {
    minutes = 60
  }

  document.getElementById("fri").innerHTML = description + " for " + minutes + " minutes to burn " + burnCal + " calories."
};

