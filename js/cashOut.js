// Cash out to the account
document.getElementById('btn-cashout-money').addEventListener('click', function () {
    // Get The Money 
    const moneyAmount = document.getElementById('money-amount-cashout').value;
    // Get Pin 
    const pinNumber = document.getElementById('pin-number-cashout').value;
    // Validate pin 
    if (pinNumber === '1234') {
        // Get Balance 
        const balance = document.getElementById('balance-amount').innerText;
        // Add the money with input amount make sure to change their type
        const newBalance = parseFloat(balance) - parseFloat(moneyAmount);
        // Update balance 
        document.getElementById ('balance-amount').innerText = newBalance;
        // Clear input fields 
        document.getElementById ('money-amount-cashout').value = '';
        document.getElementById ('pin-number-cashout').value = '';
    }
    else {
        // Message incase of pin miss match 
        alert('Faild to Cash Out. Try again!')
        // Clear input fields 
        document.getElementById ('money-amount-cashout').value = '';
        document.getElementById ('pin-number-cashout').value = '';
    }
})