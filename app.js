const customTipInput = document.querySelector('#tip-custom-text-input');
const numPeople = document.querySelector('#people');
const resetBtn = document.querySelector('#btn-reset');
const fixedPercentages = document.querySelectorAll('input[type="radio"]');
const tipSpan = document.querySelector('#tip-amount');
const totalSpan = document.querySelector('#total-amount');
const inputs = document.querySelectorAll('input');


function calculateTip() {
    let percentage = null;
    let bill = document.querySelector('#bill').value;
    let people = numPeople.value;
    let radioChecked = document.querySelector('input[type="radio"]:checked');
    let tipAmount = 0;
    let total = 0;

    percentage = radioChecked ? radioChecked.value : customTipInput.value;

    if (bill !== "" && percentage !== "" && people !== "" && parseFloat(people) > 0) {
        total = parseFloat(bill) * (1 + parseFloat(percentage) / 100) / people;
        tipAmount = total - parseFloat(bill) / people;
    }
    tipSpan.innerText = `$ ${tipAmount.toFixed(2)}`;
    totalSpan.innerText = `$ ${total.toFixed(2)}`;    
}

customTipInput.addEventListener('focus', function () {
    let radioChecked = document.querySelector('input[type="radio"]:checked');
    if (radioChecked) {
        radioChecked.checked = false;
    }
})

customTipInput.addEventListener('focusout', function () {
    customTipInput.classList.add('input-selected');
    calculateTip();
});


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

numPeople.addEventListener('focusin', function () {
    let errorMsg = numPeople.parentElement.previousElementSibling.lastElementChild;
    errorMsg.classList.add('hidden');
})


resetBtn.addEventListener('click', function () {
    for (let input of inputs) {
        if(input.getAttribute('type')=== 'radio'){
            input.checked = false;
        }else{
            input.value = "";
        }
    }
    tipSpan.innerText = "$ 0.00";
    totalSpan.innerText = "$ 0.00";
});

for (let fixedTip of fixedPercentages) {
    fixedTip.addEventListener('change', function () {
        customTipInput.value = "";
        customTipInput.classList.remove('input-selected');
    })
}

for (let input of inputs) {
    input.addEventListener('input', calculateTip)
}


