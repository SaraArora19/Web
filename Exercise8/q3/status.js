function Status() {
    let regNumber = prompt("Please enter your registration number:");
    let isStudent = confirm("Are you a student?");

    if (isStudent) {
        alert("Registration number " + regNumber + " is confirmed for a student.");
    } else {
        alert("Registration number " + regNumber + " is not confirmed for a student.");
    }
}
