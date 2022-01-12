var name = form.name.value;
var age = form.age.value;
var height = form.height.value * 2.54; // in to centimeters
var weight = form.weight.value * .454; // lb to kg
var sex = form.gender.value;
var BMR = 0; // ideal calorie intake
var idealWeight = 0;
if(sex == "Male"){
  BMR = 13.397*weight + 4.799*height - 5.677*age + 88.362;
  idealWeight = 48.0*weight + 2.7(form.height.value - 60); // GJ Hamwi (uses inches)
}
else{ // female
  BMR = 9.247*weight + 3.098*height - 4.330*age + 447.593;
  idealWeight = 45.5*weight + 2.2(form.height.value - 60);
}
var BMI = weight / ((100*height) * (100 * height));


var METfactor = 0;
var weeks = 4 + Math.round(Math.min(0, weight - idealWeight)/10); // weeks to exercise
var totalCalorieLoss = .1 * BMR; // if not overweight (burn 10% of calroie intake)


if(BMI >  25){
  totalCalorieLoss = .2 * BMR; // ideally want to lose more weight
  METfactor = 1; // increase intensity of each exercise by a factor of one.  
}
if(age > 65){ // longer duration, less intense exercises
  weeks += 1;
  METfactor = -1;
}



/* calories burned per minute * minutes = total calorie loss. 
minutes = total calorie loss / calories burned per minute
*/
// Calories burned per minute: (Weight(kg) / 200) * MET * 3.5 
Monday{
  minutes: Math.round(.2(totalCalorieLoss) / ((weight / 200) * (3.3 + MET) * 3.5)),
  description: "Brisk Walking"
};

Tuesday{
   minutes: Math.round(.2(totalCalorieLoss) / ((weight / 200) * (5 + MET) * 3.5)),
   description: "Aerobatics"
};

Wednesday{
  minutes: Math.round(.15(totalCalorieLoss) / ((weight / 200) * (7 + MET) * 3.5)),
  description: "Core exerises"
};

Thursday{
  minutes: Math.round(.3(totalCalorieLoss) / ((weight / 200) * (7 + MET) * 3.5)),
  description: "Jogging"
};

Friday{
  minutes: Math.round(.15(totalCalorieLoss) / ((weight / 200) * (4.5 + MET) * 3.5)),
  description: "Power yoga"
};