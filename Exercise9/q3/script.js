function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let feet = document.getElementById("feet").value;
    let inches = document.getElementById("inches").value;

    if (weight === "" || feet === "" || inches === "" || weight < 0 || feet < 0 || inches < 0) {
        alert("Please enter valid weight and height values.");
        return;
    }

    let totalInches = (parseInt(feet) * 12) + parseInt(inches);
    let bmi = (703 * weight) / (totalInches * totalInches);

    document.getElementById("bmiResult").value = bmi.toFixed(2);
    let status = getStatus(bmi);
    alert("Your BMI is " + bmi.toFixed(2) + ". Status: " + status);
}

function getStatus(bmi) {
    if (bmi < 17.50) return "Anorexia";
    if (bmi >= 17.50 && bmi < 19.10) return "Underweight";
    if (bmi >= 19.11 && bmi <= 25.80) return "Ideal Range";
    if (bmi > 25.81 && bmi < 27.30) return "Marginally Overweight";
    if (bmi >= 27.31 && bmi < 32.30) return "Overweight";
    return "Very Overweight or Obese";
}

function clearFields() {
    document.getElementById("weight").value = "";
    document.getElementById("feet").value = "";
    document.getElementById("inches").value = "";
    document.getElementById("bmiResult").value = "";
}
