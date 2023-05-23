function lifeInWeeks(age) {
  let day = document.getElementById();

  let maxAge = 90;
  let remainderYearsLeft = maxAge - age;
  let days = remainderYearsLeft * 365;
  let weeks = remainderYearsLeft * 52;
  let months = remainderYearsLeft * 12;

  console.log(
    "You have " +
      days +
      " days, " +
      weeks +
      " weeks, and " +
      months +
      " months left."
  );
}

lifeInWeeks(56);

function calculateAge() {
  document.getElementById("bmi-score").innerHTML = calculateBmi();
}
