// Cash out to the account
document.getElementById('btn-cashout-money').addEventListener('click', function () {
    // Get The Money 
    const moneyAmount = getInputFieldValueById('money-amount-cashout');
    // Get Pin 
    const pinNumber = getInputFieldValueById('pin-number-cashout');
     // Validate Money 
     if (isNaN(parseFloat(moneyAmount)) || parseFloat(moneyAmount) < 0){
        alert ("Transaction faild.");
        document.getElementById('money-amount-cashout').value = '';
        document.getElementById('pin-number-cashout').value = '';
        return 0;
    }
    // Validate pin 
    if (pinNumber === '1234') {
        // Get Balance 
        const balance = getInputTextById('balance-amount');
        // Add the money with input amount make sure to change their type
        const newBalance = parseFloat(balance) - parseFloat(moneyAmount);
        // Validate 2
        if (newBalance < 0){
            alert ('You do not have enough balance.');
            return 0;
        }
        // Update balance 
        document.getElementById('balance-amount').innerText = newBalance;

        // Add Transaction History
        const p = document.createElement('p');
        p.innerText = `Cashout: ${moneyAmount}. New Balance; ${newBalance}`;
        document.getElementById('transaction-container').appendChild(p);

        // Clear input fields 
        document.getElementById('money-amount-cashout').value = '';
        document.getElementById('pin-number-cashout').value = '';
    }
    else {
        // Message incase of pin miss match 
        alert('Faild to Cash Out. Try again!')
        // Clear input fields 
        document.getElementById('money-amount-cashout').value = '';
        document.getElementById('pin-number-cashout').value = '';
    }
})