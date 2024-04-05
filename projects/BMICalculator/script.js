let form = document.querySelector("form");

//submit event
form.addEventListener("submit", function (e) {
   e.preventDefault();

   //get the value height and weight
   //parseInt return integer
   const height = parseInt(document.querySelector("#height").value);
   const weight = parseInt(document.querySelector("#weight").value);
   const results = document.querySelector("#results");

   if (height === "" || height < 0 || isNaN(height)) {
      results.innerHTML = `enter valid height ${height}`;
   } else if (weight === "" || weight < 0 || isNaN(weight)) {
      results.innerHTML = `enter valid weight ${weight}`;
   } else {
      const bmi = (weight / ((height * height) / 10000)).toFixed(2); //upto 2 places
      //show result
      results.innerHTML = `<span>${bmi}</span>`;

      if (bmi < 18.6) {
         results.innerHTML = `<span>Underweight</span>`;
      } else if (bmi >= 18.6 && bmi < 24.9) {
         results.innerHTML = `<span>Normal weight</span>`;
      } else {
         results.innerHTML = `<span>Overweight</span>`;
      }
   }
});
