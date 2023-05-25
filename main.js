function calculateAge() {
  let birthDay = parseInt(document.getElementById("day").value);
  let birthMonth = parseInt(document.getElementById("month").value);
  let birthYear = parseInt(document.getElementById("year").value);

  let date = new Date();
  let currentDay = date.getDate();
  let currentMonth = 1 + date.getMonth();
  let currentYear = date.getFullYear();
  let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (birthDay > currentDay) {
    currentDay = currentDay + month[currentMonth - 1];
    currentMonth = currentMonth - 1;
  }

  if (birthMonth > currentMonth) {
    currentDay = currentDay + 12;
    currentYear = currentYear - 1;
  }

  let ageInDays = currentDay - birthDay;
  let ageInMonths = currentMonth - birthMonth;
  let ageInYears = currentYear - birthYear;

  document.getElementById("age").innerHTML =
    '<span class="years-lived">You have lived</span> <br>' +
    " " +
    ageInYears +
    " years, <br>" +
    ageInMonths +
    " months, <br>" +
    ageInDays +
    " days";
}
