function checkDrivingEligibility() {
    let age = parseInt(prompt("Please enter your age:"));

    if (age >= 18) {
        alert("You are eligible to drive!");
    } else {
        alert("You are not eligible to drive yet.");
    }
}
