function assignSeat() {
    let name = document.getElementById("passengerName").value;
    let seatClass = document.getElementById("seatClass").value;

    if (!name) {
        alert("Please enter the passenger name.");
        return;
    }

    let seatNumber = findAvailableSeat(seatClass);

    if (seatNumber === -1) {
        let alternativeSeat = findAvailableSeat(seatClass === "1" ? "2" : "1");
        if (alternativeSeat !== -1) {
            let confirmAlt = confirm("Selected class is full. Book seat in other class?");
            if (confirmAlt) {
                seatClass = seatClass === "1" ? "2" : "1";
                seatNumber = alternativeSeat;
            } else {
                alert("Next flight leaves in 3 hours.");
                return;
            }
        } else {
            alert("Sorry, all seats are booked. Next flight leaves in 3 hours.");
            return;
        }
    }

    seats[seatNumber] = 1;
    displayBoardingPass(name, seatNumber + 1, seatClass);
}

let seats = new Array(10).fill(0);

function findAvailableSeat(seatClass) {
    let start = seatClass === "1" ? 0 : 5;
    let end = seatClass === "1" ? 5 : 10;

    for (let i = start; i < end; i++) {
        if (seats[i] === 0) {
            return i;
        }
    }
    return -1;
}

function displayBoardingPass(name, seatNumber, seatClass) {
    let seatType = seatClass === "1" ? "First-Class" : "Economy";
    document.getElementById("boardingPass").textContent =
        `Passenger Name: ${name}\nSeat Number: ${seatNumber}\nClass: ${seatType}`;
}

function resetSeats() {
    seats.fill(0);
    document.getElementById("boardingPass").textContent = "";
    alert("All seats have been reset.");
}
