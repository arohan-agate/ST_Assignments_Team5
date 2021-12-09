<?php
   session_start();
   
   if(isset($_POST['age']) && isset($_POST['height']) && isset($_POST['weight']) && isset($_POST['exercise'])){
       $_SESSION['exercise'] = $_POST['exercise'];
       $_SESSION['age'] = $_POST['age'];
       $_SESSION['height'] = $_POST['height'];
       $_SESSION['weight'] = $_POST['weight'];
   }
   if(isset($_POST['BMI'])){
       $_SESSION['BMI'] = $_POST['BMI'];
   }

   if(isset($_POST['WorkoutPlan'])){
       $_SESSION['WorkoutPlan'] = $_POST['WorkoutPlan'];
   }

   if(isset($_SESSION['age']) && isset($_SESSION['height']) && isset($_SESSION['weight']) && isset($_SESSION['exercise'])){
        $meters = .0254 * $_SESSION['height'];
        $kgs = 0.453592 * $_SESSION['weight'];
        $BMI = $kgs / ($meters * $meters);
        
        if(isset($_SESSION['BMI'])){
            $_SESSION['message'] == "Your Body Mass Index is: $BMI";
        }

        if(isset($_SESSION['WorkoutPlan'])){
            if (($BMI >= 25 && $_SESSION['exercise'] < 3.75)){ 
                // 45 minutes a day for 5 days if BMI is greater than 3.75
                
                $_SESSION['message'] = "Consider raising your exercise by at least " + 3.75 - $_SESSION['exercise'] + " hours.";
            }
            // 30 minutes a day for 5 days if not doing so
            else if(($BMI < 20 && $_SESSION['exercise'] < 2.5)){
                $_SESSION['message'] = "Consider raising your exercise by at least " + 3.75 - $_SESSION['exercise'] + " hours.";
            }
            else{
                $_SESSION['message'] = "Your workout plan fits your BMI to maintain current weight";
            }
        }
   }

   if(isset($_SESSION['message'])){
       echo($_SESSION['message']);
       unset($_SESSION['message']);
   }

   

?>

<html>
    <form method = "post">
        <p>Name:<input type = "text" size = "5" name = "Name"></p>
        <p>Age: <input type = "text" size = "5" name = "age"> years</p>
        <p>Height: <input type = "text" size = "5" name = "height"> inches </p>
        <p> Weight: <input type = "text" size = "5" name = "weight"> lbs </p>
        <p> Select sex: <select name="sex">
            <option value="male">male</option>
            <option value="female">female</option>
        </select> </p>
        <p> Weekly exercise <input type = "text" size = "5" name = "exercise"> hrs/week</p>
        <input type="submit" name = "BMI" value = "Calculate BMI">
        <input type = "submit" name = "WorkoutPlan" value = "Generate Workout Plan">
        <input type = "submit" name = "IdealWeight" value = "Calculate Idea Weight">
    </form>
    
</html>