const patients = [
    { id: 1, name: "Alen", age: 39 },
    { id: 2, name: "Deena", age: 47 },
    { id: 3, name: "Diana", age: 38 },
    { id: 4, name: "Jack", age: 54 },
    { id: 5, name: "Jill", age: 23 },
    { id: 6, name: "Kelvin", age: 61 },
    { id: 7, name: "Louis", age: 18 },
    { id: 8, name: "Rex", age: 49 }
];

function sortPatients() {
    let sorted = [...patients].sort((a, b) => b.age - a.age);
    let tableBody = document.getElementById("sortedData");
    tableBody.innerHTML = sorted.map(p => `<tr><td>${p.id}</td><td>${p.name}</td><td>${p.age}</td></tr>`).join("");
}

function checkPId() {
    let searchId = parseInt(document.getElementById("searchId").value);
    let exists = patients.some(p => p.id === searchId);
    document.getElementById("searchResult").textContent = exists ? "P-Id found in the list." : "P-Id not found.";
}

function filterByAge() {
    let minAge = parseInt(document.getElementById("minAge").value);
    let maxAge = parseInt(document.getElementById("maxAge").value);
    let filtered = patients.filter(p => p.age >= minAge && p.age <= maxAge);
    let tableBody = document.getElementById("filteredData");
    tableBody.innerHTML = filtered.map(p => `<tr><td>${p.id}</td><td>${p.name}</td><td>${p.age}</td></tr>`).join("");
}
