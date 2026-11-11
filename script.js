function calculateRemainingBalance(budget, expenses) {
  return budget - expenses;
}

const totalBudget = parseFloat(prompt("Enter your total budget:"));
const totalExpenses = parseFloat(prompt("Enter your total expenses:"));

const remainingBalance = calculateRemainingBalance(totalBudget, totalExpenses);

console.log("--- SpendWise Financial Summary ---");
console.log("Total Budget: $" + totalBudget.toFixed(2));
console.log("Total Expenses: $" + totalExpenses.toFixed(2));
console.log("Remaining Balance: $" + remainingBalance.toFixed(2));