document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. DOM ELEMENTS SELECTION
    // ==========================================
    const expenseForm = document.getElementById('expense-form');
    const expenseNameInput = document.getElementById('expense-name');
    const expenseAmountInput = document.getElementById('expense-amount');
    const expenseDateInput = document.getElementById('expense-date');
    const expenseCategorySelect = document.getElementById('expense-category');
    const transactionTableBody = document.querySelector('.table-section tbody');

    // ==========================================
    // 2. DATA COLLECTION (Array of Records)
    // ==========================================
    let expenses = [
        { name: "Groceries", amount: 50.00, category: "food", date: "2023-10-01" },
        { name: "Electricity Bill", amount: 75.00, category: "utilities", date: "2023-10-05" },
        { name: "Movie Tickets", amount: 30.00, category: "entertainment", date: "2023-10-10" },
        { name: "Gas", amount: 40.00, category: "transportation", date: "2023-10-15" },
        { name: "Rent", amount: 45.00, category: "housing", date: "2023-10-25" }
    ];

    // ==========================================
    // 3. HELPER FUNCTIONS
    // ==========================================
    
    // Format numbers into standard currency string
    const formatCurrency = (amount) => {
        return `$${parseFloat(amount).toFixed(2)}`;
    };

    // Prevent basic HTML injection attacks for safety
    const escapeHTML = (str) => {
        return str.replace(/[&<>'"]/g, tag => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
        }[tag] || tag));
    };

    // Capitalize category names for clean UI display
    const formatCategoryName = (category) => {
        return category.charAt(0).toUpperCase() + category.slice(1);
    };

    // ==========================================
    // 4. DATA PROCESSING & RENDERING (Loops)
    // ==========================================

    // Calculate sum totals for each category using a loop
    const calculateCategoryTotals = (expenseList) => {
        let totals = { food: 0, utilities: 0, entertainment: 0, transportation: 0, housing: 0, savings: 0 };

        expenseList.forEach(expense => {
            if (totals.hasOwnProperty(expense.category)) {
                totals[expense.category] += parseFloat(expense.amount);
            }
        });

        return totals;
    };

    // Render all transaction rows into the HTML table
    const renderTable = (expenseList) => {
        transactionTableBody.innerHTML = ''; // Clear current rows

        expenseList.forEach(expense => {
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${escapeHTML(expense.name)}</td>
                <td>${formatCurrency(expense.amount)}</td>
                <td>${formatCategoryName(expense.category)}</td>
                <td>${expense.date}</td>
            `;
            
            transactionTableBody.appendChild(row);
        });
    };

    // Update the category cards on the dashboard dynamically
    const renderCategoryCards = (totals) => {
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

    // Master function to refresh the entire UI dashboard
    const updateDashboard = () => {
        renderTable(expenses);
        const categoryTotals = calculateCategoryTotals(expenses);
        renderCategoryCards(categoryTotals);
    };

    // ==========================================
    // 5. USER INTERACTION & EVENT LISTENERS
    // ==========================================
    
    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form page refresh

        // Grab values from inputs
        const name = expenseNameInput.value.trim();
        const amount = parseFloat(expenseAmountInput.value);
        const date = expenseDateInput.value;
        const category = expenseCategorySelect.value;

        // Conditional Validation Check
        if (!name || isNaN(amount) || amount <= 0 || !date) {
            alert('Please provide a valid name, positive amount, and date.');
            return;
        }

        // Conditional Budget Scenario Feedback
        if (amount > 100) {
            console.warn(`High Expense Alert: "${name}" is $${amount.toFixed(2)}. Monitor closely.`);
        }

        // Create new record object and push to array
        const newExpense = { name, amount, category, date };
        expenses.push(newExpense);

        // Update the UI with new data
        updateDashboard();

        // Reset form inputs for next entry
        expenseForm.reset();
    });

    // ==========================================
    // 6. INITIAL APP LOAD
    // ==========================================
    updateDashboard();
});
    // Initial render call when the page loads
    updateDashboard();
});
