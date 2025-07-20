// don't edit or remove the type declaration
type TransactionType = "income" | "expense";
type Transaction = [TransactionType, number];

/**
 * You can use this array to
 * manually test your functions
 */
const transactions: Transaction[] = [
  ["income", 1000],
  ["income", 1500],
  ["expense", 500],
  ["expense", 300],
  ["income", 700],
];

// `filterIncomeTransactions` function that:
// - Accepts a "transactions" parameter of type "Transaction[]".
// - Returns a new array containing only the income transactions.
// example:
// filterIncomeTransactions(transactions); // => [["income", 1000], ["income", 1500], ["income", 700]]
function filterIncomeTransactions(transactions: Transaction[]): Transaction[] {
  return transactions.filter((transaction) => transaction.includes("income"));
}

// `filterExpenseTransactions` function that:
// - Accepts a "transactions" parameter of type "Transaction[]".
// - Return a new array containing only the expense transactions.
// example:
// filterExpenseTransactions(transactions); // => [["expense", 500], ["expense", 300]]
function filterExpenseTransactions(transactions: Transaction[]): Transaction[] {
  return transactions.filter((transaction) => transaction.includes("expense"));
}

// `calculateTotalIncome` function that:
// - Accepts a "transactions" parameter of type "Transaction[]".
// - calculates the total income and returns it.
// example:
// calculateTotalIncome(transactions); // => 3200  (1000 + 1500 + 700)
function calculateTotalIncome(transactions: Transaction[]): any {
  let incomeOnly = transactions.filter((transaction) =>
    transaction.includes("income")
  );

  let result = incomeOnly.reduce((acc, curr) => {
    return acc + curr[1];
  }, 0);

  console.log(result);
  return result;
}

// calculateTotalIncome(transactions);

// `calculateTotalExpenses` function that:
// - Accepts a "transactions" parameter of type "Transaction[]".
// - calculates the total expense and returns it.
// example:
// calculateTotalExpenses(transactions); // => 800  (500 + 300)
function calculateTotalExpenses(transactions: Transaction[]): any {
  let expenseOnly = transactions.filter((transaction) =>
    transaction.includes("expense")
  );

  let result = expenseOnly.reduce((acc, curr) => {
    return acc + curr[1];
  }, 0);

  console.log(result);
  return result;
}
// calculateTotalExpenses(transactions);

// `calculateNetTotal` function that:
// - Accepts a "transactions" parameter of type "Transaction[]".
// - calculates the net total (total income - total expenses) and returns it.
// example:
// calculateNetTotal(transactions); // => 2400  (3200 - 800)
function calculateNetTotal(transactions: Transaction[]) {
  let incomeOnly = transactions.filter((transaction) =>
    transaction.includes("income")
  );

  let result1 = incomeOnly.reduce((acc, curr) => {
    return acc + curr[1];
  }, 0);

  let expenseOnly = transactions.filter((transaction) =>
    transaction.includes("expense")
  );

  let result2 = expenseOnly.reduce((acc, curr) => {
    return acc + curr[1];
  }, 0);

  let total = result1 - result2;
  console.log(total);
  return total;
}

// calculateNetTotal(transactions);

// `filterSignificantTransactions` function that:
// - Accepts 2 parameters:
// - a "transactions" parameter of type "Transaction[]".
// - a "threshold" parameter of type "number"
// - identifies and creates a new array with transactions (both incomes and expenses) above or equal to "threshold".
// example:
// filterSignificantTransactions(transactions, 1000); // =>  [["income", 1000], ["income", 1500]]
function filterSignificantTransactions(
  transactions: Transaction[],
  threshold: number
): Transaction[] {
  return transactions.filter((item) => {
    return item[1] >= threshold;
  });
}
filterSignificantTransactions(transactions, 500);
export {
  Transaction,
  filterIncomeTransactions,
  filterExpenseTransactions,
  calculateTotalIncome,
  calculateTotalExpenses,
  calculateNetTotal,
  filterSignificantTransactions,
};
