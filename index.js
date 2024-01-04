const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");
    const bmi = weight / ((height / 100) * (height / 100)).toFixed(2);
    const overWeight = "24.9";
    const underWeight = "18.6";
    const normalWeight = "24.9";

    // Validation
    if (height == "" || height < 0 || isNaN(height)) {
        result.innerHTML = `<span> Please enter a valid height </span>`

    } else if (weight == "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = `<span> Please enter a valid weight </span>`

    } else if (`${bmi}` > 24.9) {
        result.innerHTML = `<span> Your current BMI is ${bmi} <br> which is Over weight `

    } else if (`${bmi}` >= 18.6 && `${bmi}` < 25) {
        result.innerHTML = `<span> Your current BMI is ${bmi} <br> which is Normal weight `

    } else if (`${bmi}` < 18.6 ) {
        result.innerHTML = `<span> Your current BMI is ${bmi} <br> which is Under weight`

    }
})