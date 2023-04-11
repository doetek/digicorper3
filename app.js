const userBk = () => {
  const heightVal = Number(document.getElementById("heightValue").value);
  const weightVal = Number(document.getElementById("weightValue").value);
  const userReport = document.getElementById("report");
  const output = document.getElementById("result");

  output.innerHTML = ` Your BMI score is : ${(
    weightVal /
    (heightVal * heightVal)
  ).toFixed(2)}  ${"kg/m&sup2"}`;
  let userHeight = (heightVal * heightVal) ;
  const underWeight = 18.5;
  const healthyWeight = 24.9;
  const overWeight = 29.9;
  const obese = 30;

  const bmi = weightVal / userHeight;

  if (bmi < underWeight) {
    userReport.innerHTML =
      "Your BMI result indicates you are in the underweight category.";
  } else {
    if (bmi < underWeight || healthyWeight > bmi) {
      userReport.innerHTML =
        "Your BMI result indicates you are in the normal weight category.";
    } else {
      if (bmi < healthyWeight || overWeight > bmi) {
        userReport.innerHTML =
          "Your BMI result indicates you are in the over weight category.";
      } else {
        if (bmi > obese) {
          userReport.innerHTML =
            "Your BMI result indicates you are in the obese category.";
        }
      }
    }
  }
};
