const monthNumber = prompt("Enter a number between 1 and 12:");
 const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 if (monthNumber >= 1 && monthNumber <= 12) {
     console.log(`The month corresponding to number ${monthNumber} is ${months[monthNumber-1]}`);
 } else {
     alert("Invalid number entered. Please enter a number between 1 and 12.");
 }