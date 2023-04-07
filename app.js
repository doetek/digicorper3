const userBk = () => {
  const heightVal = Number(document.getElementById("heightValue").value);
  const weightVal = Number(document.getElementById("weightValue").value);
  const userReport = document.getElementById("report");
  const output = document.getElementById("result");

  output.innerHTML = ` Your BMI score is : ${(
    weightVal /
    (heightVal / 100) ** 2
  ).toFixed(1)}  ${"kg/m&sup2"}`;
  let userHeight = (heightVal / 100) ** 2;
  const underWeight = 18.5;
  const healthyWeight = 24.9;
  const overWeight = 29.9;
  const obese = 30;

  const sum = weightVal / userHeight;

  if (sum < underWeight) {
    userReport.innerHTML =
      "Your BMI result indicates you are in the underweight category.";
  } else {
    if (sum < underWeight || healthyWeight > sum) {
      userReport.innerHTML =
        "Your BMI result indicates you are in the healthy weight category.";
    } else {
      if (sum < healthyWeight || overWeight > sum) {
        userReport.innerHTML =
          "Your BMI result indicates you are in the over weight category.";
      } else {
        if (sum > obese) {
          userReport.innerHTML =
            "Your BMI result indicates you are in the obese category.";
        }
      }
    }
  }
};
