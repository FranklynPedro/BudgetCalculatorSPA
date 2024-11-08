let income = 0;
let expenses = {
    housing: 0,
    utilities: 0,
    transportation: 0,
    food: 0,
    entertainment: 0,
    other: 0
};
let chart;

function showSection(section) {
    document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
    document.getElementById(`${section}-section`).style.display = 'block';
    if (section === 'summary') {
        showBudgetSummary();
    }
}

function saveIncome() {
    income = parseFloat(document.getElementById('income').value);
    if (isNaN(income) || income < 0) {
        alert('Please enter a valid income amount.');
    } else {
        alert('Income saved successfully.');
    }
}

function saveExpenses() {
    expenses.housing = parseFloat(document.getElementById('housing').value) || 0;
    expenses.utilities = parseFloat(document.getElementById('utilities').value) || 0;
    expenses.transportation = parseFloat(document.getElementById('transportation').value) || 0;
    expenses.food = parseFloat(document.getElementById('food').value) || 0;
    expenses.entertainment = parseFloat(document.getElementById('entertainment').value) || 0;
    expenses.other = parseFloat(document.getElementById('other').value) || 0;
    alert('Expenses saved successfully.');
}

function showBudgetSummary() {
    let totalExpenses = Object.values(expenses).reduce((sum, val) => sum + val, 0);
    let remainingBudget = income - totalExpenses;

    let summary = `
        <strong>Total Income:</strong> R${income.toFixed(2)}<br>
        <strong>Total Expenses:</strong> R${totalExpenses.toFixed(2)}<br>
        <strong>Remaining Budget:</strong> R${remainingBudget.toFixed(2)}<br>
    `;

    if (remainingBudget < 0) {
        summary += '<span style="color: red;">Warning: You have exceeded your budget!</span>';
    } else if (remainingBudget === 0) {
        summary += '<span style="color: orange;">You have exactly balanced your budget.</span>';
    } else {
        summary += '<span style="color: green;">Great! You have a surplus in your budget.</span>';
    }

    document.getElementById('summary').innerHTML = summary;
    drawChart();
}

function drawChart() {
    if (chart) {
        chart.destroy();
    }

    const ctx = document.getElementById('budgetChart').getContext('2d');
    chart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Housing', 'Utilities', 'Transportation', 'Food', 'Entertainment', 'Other'],
            datasets: [{
                data: [
                    expenses.housing,
                    expenses.utilities,
                    expenses.transportation,
                    expenses.food,
                    expenses.entertainment,
                    expenses.other
                ],
                backgroundColor: document.body.classList.contains('dark-mode') 
                    ? ['#3E4A61', '#6A3576', '#A6463F', '#2E7D32', '#FFB300', '#039BE5']
                    : ['#4A90E2', '#9C27B0', '#FF7043', '#4CAF50', '#FFCA28', '#29B6F6']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            },
            maintainAspectRatio: false,
            width: 300,
            height: 300
        }
    });
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    drawChart(); // Redraw chart with updated color scheme
}

function clearSummary() {
    document.getElementById('summary').innerHTML = '';
    if (chart) {
        chart.destroy();
    }
    showSection('income');
}
