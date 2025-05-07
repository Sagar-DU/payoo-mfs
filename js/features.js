// Click on Cash Out 
document.getElementById('btn-show-cash-out').addEventListener('click', function () {
    // Get The field where there's hidden class and remove the hidden class
    // document.getElementById('cash-out-field').classList.remove('hidden');
    // Add the hidden class to the other field where's no hidden class previously
    showSectionById ('cash-out-field');
});
// Click Add Money
document.getElementById('btn-show-add-money').addEventListener('click', function () {
    // Get The field where there's hidden class and remove the hidden class
    // document.getElementById('add-money-field').classList.remove('hidden');
    // Add the hidden class to the other field where's no hidden class previously
    // document.getElementById('cash-out-field').classList.add('hidden');
    showSectionById ('add-money-field');
});