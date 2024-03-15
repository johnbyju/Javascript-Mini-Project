let ageCalculator = () => {
  let inputdob = new Date(document.getElementById("inputdob").value);
  let currentDate = new Date();
  console.log(currentDate);
  let ageInMilliseconds = currentDate - inputdob;
  console.log(ageInMilliseconds);
  let ageInYears = Math.floor(
    ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25)
  );
  let remainingDays = ageInMilliseconds % (1000 * 60 * 60 * 24 * 365.25);
  console.log(remainingDays);
  let ageInMonths = Math.floor(remainingDays / (1000 * 60 * 60 * 24 * 30.44));
  let remainingMilliseconds = remainingDays % (1000 * 60 * 60 * 24 * 30.44);
  let ageInDays = Math.floor(remainingMilliseconds / (1000 * 60 * 60 * 24));

  document.getElementById("years").innerText = ageInYears;
  document.getElementById("months").innerText = ageInMonths;
  document.getElementById("days").innerText = ageInDays;
};
document.getElementById("getbtn").addEventListener("click", calculateAge);
