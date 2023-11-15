function toggleAllRequests(source) {
    // This line queries all checkboxes with the class 'requestCheckbox'
    var checkboxes = document.querySelectorAll('.requestCheckbox');

    // This loop sets each request checkbox to the same checked state as the master checkbox
    checkboxes.forEach(checkbox => checkbox.checked = source.checked);
}

function updateMasterCheckboxState() {
    var allCheckboxes = document.querySelectorAll('.requestCheckbox');
    var total = allCheckboxes.length;
    var checked = Array.from(allCheckboxes).filter(checkbox => checkbox.checked).length;

    var masterCheckbox = document.getElementById('masterCheckbox');
    if (checked === 0) {
        masterCheckbox.checked = false;
        masterCheckbox.indeterminate = false;
    } else if (checked === total) {
        masterCheckbox.checked = true;
        masterCheckbox.indeterminate = false;
    } else {
        masterCheckbox.checked = false;
        masterCheckbox.indeterminate = true;
    }
}
