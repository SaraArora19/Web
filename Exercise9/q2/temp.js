function categorizeTemperatures() {
    const temperatures = [55, 62, 68, 74, 59, 45, 41, 58, 60, 67, 65, 78, 82, 88, 91, 92, 90, 93, 87, 80, 78, 79, 72, 68, 61, 59, 55, 65];
    let hotDays = 0, pleasantDays = 0, coldDays = 0;
    let tableContent = "<table border='1'><tr><th>Temperature (°F)</th><th>Category</th></tr>";

    for (let i = 0; i < temperatures.length; i++) {
        let category = "";
        if (temperatures[i] > 85) {
            category = "HOT";
            hotDays++;
        } else if (temperatures[i] >= 60 && temperatures[i] <= 84) {
            category = "PLEASANT";
            pleasantDays++;
        } else {
            category = "COLD";
            coldDays++;
        }

        tableContent += `<tr><td>${temperatures[i]}</td><td>${category}</td></tr>`;
    }

    tableContent += "</table>";

    alert("HOT days: " + hotDays + "\nPLEASANT days: " + pleasantDays + "\nCOLD days: " + coldDays);

    document.getElementById("tempTable").innerHTML = tableContent;
}
