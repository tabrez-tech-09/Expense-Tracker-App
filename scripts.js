let expenses = [];
let totalAmount = 0;

const categorySelect = document.getElementById("category-select");
const amountInput = document.getElementById("amount-input");
const dateInput = document.getElementById("date-input");
const addBtn = document.getElementById("btn-add");
const expenseTableBody = document.getElementById("expense-table-body");
const totalAmountCell = document.getElementById("total-amount");

addBtn.addEventListener('click', function () {
    const category = categorySelect.value.trim();
    const amount = parseFloat(amountInput.value.trim());
    const date = dateInput.value.trim();

    // Validation
    if (category === "") {
        alert("Please select a category");
        return;
    }
    if (isNaN(amount) || amount <= 0) {
        alert("Please add a valid amount");
        return;
    }
    if (date === "") {
        alert("Please select a date");
        return;
    }

  
    const expense = { category, amount, date };
    expenses.push(expense);
    totalAmount += amount;

    totalAmountCell.textContent = totalAmount.toFixed(2);


    const newRow = expenseTableBody.insertRow();
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount.toFixed(2);
    dateCell.textContent = expense.date;

   
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener('click', function () {

        const index = expenses.indexOf(expense);
        if (index > -1) {
            expenses.splice(index, 1);
            totalAmount -= expense.amount;
            totalAmountCell.textContent = totalAmount.toFixed(2);
        }

        newRow.remove();
    });

    deleteCell.appendChild(deleteBtn);

    categorySelect.value = "";
    amountInput.value = "";
    dateInput.value = "";
});

