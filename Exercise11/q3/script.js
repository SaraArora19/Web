function updateTime() {
    let timeDisplay = document.getElementById("time");
    let now = new Date();
    timeDisplay.textContent = "Time: " + now.toLocaleTimeString();
}

setInterval(updateTime, 1000);

function validateForm() {
    let valid = true;

    let name = document.getElementById("name").value;
    let zip = document.getElementById("zipcode").value;
    let country = document.getElementById("country").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let verifyPassword = document.getElementById("verifyPassword").value;
    let pan = document.getElementById("pan").value;
    let gender = document.getElementsByName("gender");
    let preferences = document.getElementsByName("preferences");

    document.querySelectorAll(".error").forEach(e => e.textContent = "");

    if (name.trim() === "" || name.length > 15) {
        document.getElementById("nameError").textContent = "Please enter your name!";
        valid = false;
    }

    if (zip.trim() === "" || isNaN(zip) || zip.length > 6) {
        document.getElementById("zipError").textContent = "Invalid Zip Code!";
        valid = false;
    }

    if (country === "") {
        document.getElementById("countryError").textContent = "Select a country!";
        valid = false;
    }

    if (![...gender].some(g => g.checked)) {
        document.getElementById("genderError").textContent = "Select gender!";
        valid = false;
    }

    if (![...preferences].some(p => p.checked)) {
        document.getElementById("prefError").textContent = "Select at least one preference!";
        valid = false;
    }

    if (phone.trim() === "" || isNaN(phone) || phone.length !== 10) {
        document.getElementById("phoneError").textContent = "Enter valid 10-digit phone!";
        valid = false;
    }

    let emailPattern = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email!";
        valid = false;
    }

    let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
    if (!passwordPattern.test(password)) {
        document.getElementById("passwordError").textContent = "Weak password!";
        valid = false;
    }

    if (password !== verifyPassword) {
        document.getElementById("verifyPasswordError").textContent = "Passwords do not match!";
        valid = false;
    }

    let panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (!panPattern.test(pan)) {
        document.getElementById("panError").textContent = "Invalid PAN format!";
        valid = false;
    }

    if (!valid) return;
    alert("Form Submitted Successfully!");
}

function printForm() {
    let gender = [...document.getElementsByName("gender")].find(g => g.checked)?.value || "Not selected";
    let country = document.getElementById("country").value || "Not selected";
    let preferences = [...document.getElementsByName("preferences")].filter(p => p.checked).map(p => p.value).join(", ") || "None";

    console.log("Gender:", gender);
    console.log("Country:", country);
    console.log("Preferences:", preferences);
    window.print();
}
