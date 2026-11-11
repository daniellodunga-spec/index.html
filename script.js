document.addEventListener('DOMContentLoaded', () => {
    const expenseForm = document.getElementById('expense-form');
    const expenseNameInput = document.getElementById('expense-name');
    const expenseAmountInput = document.getElementById('expense-amount');
    const expenseDateInput = document.getElementById('expense-date');
    const expenseCategorySelect = document.getElementById('expense-category');
    const transactionTableBody = document.querySelector('.table-section tbody');

    // 2. Work with Multiple Records: Array to store all expenses
    let expenses = [
        { name: "Groceries", amount: 50.00, category: "food", date: "2023-10-01" },
        { name: "Electricity Bill", amount: 75.00, category: "utilities", date: "2023-10-05" },
        { name: "Movie Tickets", amount: 30.00, category: "entertainment", date: "2023-10-10" },
        { name: "Gas", amount: 40.00, category: "transportation", date: "2023-10-15" },
        { name: "Rent", amount: 45.00, category: "housing", date: "2023-10-25" }
    ];

    // Helper function to format currency
    const formatCurrency = (amount) => {
        return `$${parseFloat(amount).toFixed(2)}`;
    };

    // 3. Process Data with Loops & 4. Update Dashboard Dynamically
    const updateDashboard = () => {
        // Clear current table rows
        transactionTableBody.innerHTML = '';

        // Object to hold running totals per category for loop processing
        let categoryTotals = {
            food: 0,
            utilities: 0,
            entertainment: 0,
            transportation: 0,
            housing: 0,
            savings: 0
        };

        // 3. Process Data with Loops: Loop through expense records
        expenses.forEach((expense) => {
            // Append to table dynamically
            const newRow = document.createElement('tr');
            const formattedCategory = expense.category.charAt(0).toUpperCase() + expense.category.slice(1);

            newRow.innerHTML = `
                <td>${escapeHTML(expense.name)}</td>
                <td>${formatCurrency(expense.amount)}</td>
                <td>${formattedCategory}</td>
                <td>${expense.date}</td>
            `;
            transactionTableBody.appendChild(newRow);

            // Accumulate totals for matching categories
            if (categoryTotals.hasOwnProperty(expense.category)) {
                categoryTotals[expense.category] += parseFloat(expense.amount);
            }
        });

        // Update the category cards on the DOM based on calculated totals
        updateCategoryCards(categoryTotals);
    };

    // Helper to update the card amounts on the webpage
    const updateCategoryCards = (totals) => {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const titleElement = card.querySelector('h3');
            const amountElement = card.querySelector('.amount');
            
            if (titleElement && amountElement) {
                const categoryName = titleElement.textContent.toLowerCase();
                if (totals.hasOwnProperty(categoryName)) {
                    amountElement.textContent = formatCurrency(totals[categoryName]);
                }
            }
        });
    };

    // 5. Handle User Interactions: Event listener for adding new expenses
    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = expenseNameInput.value.trim();
        const amount = parseFloat(expenseAmountInput.value);
        const date = expenseDateInput.value;
        const category = expenseCategorySelect.value;

        // 1. Implement Decision Making: Conditional validation checks
        if (!name || isNaN(amount) || amount <= 0 || !date) {
            alert('Please enter a valid expense name, a positive amount, and a date.');
            return;
        }

        // Conditional feedback scenario (e.g., flagging high individual expenses)
        if (amount > 100) {
            console.warn(`Notice: High expense added (${name}: $${amount}). Consider monitoring this category closely.`);
        }

        // Add new record to array
        const newExpense = { name, amount, category, date };
        expenses.push(newExpense);

        // Re-render and update everything dynamically
        updateDashboard();

        // Reset the form
        expenseForm.reset();
    });

    // Security helper to prevent basic HTML injection
    function escapeHTML(str) {
        return str.replace(/[&<>'"]/g, 
            tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
        );
    }

    // Initial render call when the page loads
    updateDashboard();
});
