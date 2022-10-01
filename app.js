const customTipInput = document.querySelector('#tip-custom-text-input');

customTipInput.addEventListener('focus',function(){
    let radioChecked = document.querySelector('input[type="radio"]:checked');
    if(radioChecked){
        radioChecked.checked = false;
    }
})