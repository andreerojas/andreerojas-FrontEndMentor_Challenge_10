const customTipInput = document.querySelector('#tip-custom-text-input');
const numPeople = document.querySelector('#people');
const resetBtn = document.querySelector('#btn-reset');

customTipInput.addEventListener('focus', function () {
    let radioChecked = document.querySelector('input[type="radio"]:checked');
    if (radioChecked) {
        radioChecked.checked = false;
    }
})

numPeople.addEventListener('focusout', function () {
    let container = numPeople.parentElement; 
    let errorMsg = container.previousElementSibling.lastElementChild;
    if (numPeople.value !== "" && parseFloat(numPeople.value) !== 0) {
        resetBtn.disabled = false;
        errorMsg.classList.add('hidden');
        container.classList.remove('wrong-input');
    }
    else {
        errorMsg.classList.remove('hidden');
        container.classList.add('wrong-input');
    }
})

numPeople.addEventListener('focusin',function(){
    let errorMsg = numPeople.parentElement.previousElementSibling.lastElementChild;
    errorMsg.classList.add('hidden');
})