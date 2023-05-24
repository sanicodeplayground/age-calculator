/*
const currentYear = 2023;
let day = parseFloat(document.getElementById("day").value);
let month = parseFloat(document.getElementById("month").value);
let year = parseFloat(document.getElementById("year").value);

function lifeInWeeks(age) {
  let daysLived = calculateAge() * 365;
  let weeksLived = calculateAge() * 52;
  let monthsLived = calculateAge() * 12;

  // let daysLived = remainderYearsLeft * 365;
  // let weeks = remainderYearsLeft * 52;
  // let months = remainderYearsLeft * 12;

  return
  "You have lived " +
    days +
    " days, " +
    weeks +
    " weeks, and " +
    months +
    " months.";
}

function calculateAge() {
  let currentAge = currentYear - year;
  return currentAge;
}

lifeInWeeks(56);

// function calculateAge() {
//   document.getElementById("bmi-score").innerHTML = calculateBmi();
// }

*/
/*
const currentYear = 2023;

function lifeInWeeks(age) {
  let daysLived = age * 365;
  let weeksLived = age * 52;
  let monthsLived = age * 12;

  return (
    "You have lived " +
    daysLived +
    " days, " +
    weeksLived +
    " weeks, and " +
    monthsLived +
    " months."
  );
}

function calculateAge(year) {
  let currentAge = currentYear - year;
  return currentAge;
}

let year = parseFloat(document.getElementById("year").value);
let age = calculateAge(year);
let result = lifeInWeeks(age);
return result;
*/

let birthDay = document.getElementById("day").value;
let birthMonth = document.getElementById("month").value;
let birthYear = document.getElementById("year").value;

let date = new Date();
let currentDay = date.getDate();
let currentMonth = 1 + date.getMonth();
let currentYear = date.getFullYear();
let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

if (day > currentDay) {
  currentDay = currentDay + month[currentMonth - 1];
  currentMonth = currentMonth - 1;
}

if (birthMonth > currentMonth) {
  currentDay = currentDay + 12;
  currentYear = currentYear - 1;
}

let ageInDays = currentMonth - birthDay;
let ageInMonths = currentMonth - birthMonth;
let ageInYears = currentYear - birthYear;

// document.getElementById("age").innerHTML =
//   "You have lived " +
//   ageInYears +
//   " years," +
//   ageInMonths +
//   " months" +
//   ageInDays +
//   " days";
