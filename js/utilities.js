// Get Input Field Value by ID Name 
function getInputFieldValueById (id){
    return document.getElementById(id).value;
}

// Get Input Text by ID Name 
function getInputTextById (id){
    return document.getElementById(id).innerText;
}

// Get section by ID 
function showSectionById (id){
    document.getElementById('add-money-field').classList.add('hidden');
    document.getElementById('cash-out-field').classList.add('hidden');
    document.getElementById('transaction-container').classList.add('hidden');
    // Show the section with parameter ID 
    return     document.getElementById(id).classList.remove('hidden');
}