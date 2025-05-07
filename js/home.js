// Add Money to the account
document.getElementById('btn-add-money').addEventListener('click', function () {
    // Get The Money 
    const moneyAmount = document.getElementById('money-amount').value;
    // Get Pin 
    const pinNumber = document.getElementById('pin-number').value;
    // Validate pin 
    if (pinNumber === '1234') {
        const balance = document.getElementById('balance-amount').innerText;
        const newBalance = parseFloat(balance) + parseFloat(moneyAmount);
        document.getElementById ('balance-amount').innerText = newBalance;
        document.getElementById ('money-amount').value = '';
        document.getElementById ('pin-number').value = '';
    }
    else {
        alert('Faild to add money. Try again!')
    }
})