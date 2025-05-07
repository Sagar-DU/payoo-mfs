// Cash out to the account
document.getElementById('btn-cashout-money').addEventListener('click', function () {
    // Get The Money 
    const moneyAmount = getInputFieldValueById('money-amount-cashout');
    // Get Pin 
    const pinNumber = getInputFieldValueById('pin-number-cashout');
    // Validate pin 
    if (pinNumber === '1234') {
        // Get Balance 
        const balance = getInputTextById('balance-amount');
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