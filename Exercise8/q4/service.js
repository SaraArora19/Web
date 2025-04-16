function ServiceCharge() {
    const ratePerHour = 453;
    let hoursWorked = parseFloat(prompt("Enter the number of hours worked:"));
    let costOfMaterials = parseFloat(prompt("Enter the cost of material:"));
    let labourCost = ratePerHour * hoursWorked;
   
 let totalCharge = labourCost + costOfMaterials;
  }
  