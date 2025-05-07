// Add Money to the account
document.getElementById('btn-add-money').addEventListener('click', function () {
    // Get The Money 
    const moneyAmount = getInputFieldValueById('money-amount');
    // Get Pin 
    const pinNumber = getInputFieldValueById('pin-number');
    // Validate Money 
    if (isNaN(parseFloat(moneyAmount))){
        alert ("Transaction faild.");
        document.getElementById ('money-amount').value = '';
        document.getElementById ('pin-number').value = '';
        return 0;
    }
    // Validate pin 
    if (pinNumber === '1234') {
        // Get Balance 
        const balance = getInputTextById('balance-amount');
        // Add the money with input amount make sure to change their type
        const newBalance = parseFloat(balance) + parseFloat(moneyAmount);
        // Update balance 
        document.getElementById ('balance-amount').innerText = newBalance;

        // Add Transaction History
        const p =document.createElement('p');
        p.innerText = `Added: ${moneyAmount}. New Balance; ${newBalance}`;
        document.getElementById('transaction-container').appendChild(p);

        // Clear input fields 
        document.getElementById ('money-amount').value = '';
        document.getElementById ('pin-number').value = '';
    }
    else {
        // Message incase of pin miss match 
        alert('Faild to add money. Try again!')
    }
})
