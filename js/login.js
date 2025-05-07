// Get the Element and add Event listner
document.getElementById('btn-login').addEventListener('click', function () {
    // console.log ('clicked on  the button');
    // Get the phone number 
    const phoneNumber = document.getElementById('phone').value;
    // Get the pin number 
    const pinNumber = document.getElementById('pin').value;
    // console.log(phoneNumber,pinNumber);
    
    // Validate in Fokira Way 
    if (phoneNumber === '5' && pinNumber === '1234'){
        window.location.href = '/home.html';
    }
    else {
        alert ('Wrong Number or Pin')
    }

})