// Add Money to the account
document.getElementById('btn-add-money').addEventListener('click', function () {
    // Get The Money 
    const moneyAmount = document.getElementById('money-amount').value;
    // Get Pin 
    const pinNumber = document.getElementById('pin-number').value;
    // Validate pin 
    if (pinNumber === '1234') {
        // Get Balance 
        const balance = document.getElementById('balance-amount').innerText;
        // Add the money with input amount make sure to change their type
        const newBalance = parseFloat(balance) + parseFloat(moneyAmount);
        // Update balance 
        document.getElementById ('balance-amount').innerText = newBalance;
        // Clear input fields 
        document.getElementById ('money-amount').value = '';
        document.getElementById ('pin-number').value = '';
    }
    else {
        // Message incase of pin miss match 
        alert('Faild to add money. Try again!')
    }
})