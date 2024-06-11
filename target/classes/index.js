// ════════════════ Exercise 1 ════════════════════ //
/** 
TODO: Add the appropriate default value(s) to the specified parameter(s).

    @param {number} income - A required parameter that represents an individual's gross monthly income.
    @param {number} taxRate - An optional parameter represents the percentage of an individuals gross monthly income that will go toward taxes.  The default value should be '15'.
    @returns {number} - the monetary value of the amount of gross income that went toward taxes.
*/
function calculateTaxed(income, taxRate) {
    return income * (taxRate / 100);
}

// ════════════════ Exercise 2 ════════════════════ //
/** 
TODO: Add the appropriate default value(s) to the specified parameter(s).

    @param {number} income - A required parameter that represents an individual's gross monthly income.
    @param {number} expensePercentage - An optional parameter that represents the percentage of an individuals gross monthly income that will go toward expenses. The default value should be '50'.
    @returns {number} - the monetary value of the amount of gross income that went toward expenses.
 */
function calculateExpenses(income, expensePercentage) {
    return income * (expensePercentage / 100);
}

// ════════════════ Exercise 3 ════════════════════ //
/** 
TODO: Add the appropriate default value(s) to the specified parameter(s).

    @param {number} income - A required parameter that represents an individual's gross monthly income.
    @param {number} savePercentage - An optional parameter that represents the percentage of an individuals gross monthly income that will go toward expenses. The default value should be '20'.
    @returns {number} - the monetary value of the amount of gross income that went toward savings.
 */
function calculateSaved(income, savePercentage) {
    return income * (savePercentage / 100);
}


// ════════════════════════════════════════════════ //
/* Note: You do not need to edit or view any code below this point. */

function calculateSpendable(income, taxed, expenses, saved) {
    return income - taxed - expenses - saved;
}

function handleSubmit(event) {
    // Prevent default form submission behavior
    event.preventDefault();

    // Retrieve form data
    const formData = new FormData(event.target);

    // Process form data
    let income = formData.get("income");
    let taxRate = formData.get("taxRate") || undefined;
    let expensesPercentage = formData.get("expensesPercentage") || undefined;
    let savePercentage = formData.get("savePercentage") || undefined;

    // calculate monetary amounts
    let taxed = calculateTaxed(income, taxRate);
    let expenses = calculateExpenses(income, expensesPercentage);
    let saved = calculateSaved(income, savePercentage);
    let spendable = calculateSpendable(income, taxed, expenses, saved)

    // update text
    document.getElementById("text").innerText = `Total Income: $${income}
    Taxed: $${taxed}
    Expenses: $${expenses}
    Saved: $${saved}
    Spendable: $${spendable}`;

    // Reset the form
    event.target.reset();
}

// Get the form element, add event listener
document.getElementById("form")?.addEventListener("submit", handleSubmit);


