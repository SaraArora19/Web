function calculateTotal() {
    let adultTickets = document.getElementById("adults").value;
    let childTickets = document.getElementById("children").value;
    let total = (adultTickets * 10) + (childTickets * 5);
    document.getElementById("totalAmount").value = "₹" + total;
  }
  