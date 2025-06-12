let submit = document.querySelector('.btn');
let result = document.querySelector('.result');
let buttons = document.querySelectorAll('[name="contact"]');
/*alert(buttons.length);*/

function selectList() {
    let choiceList = [];
    for(btn of buttons) {
        if (btn.checked) {
            choiceList.push(btn.value);
        }
    }
    if (choiceList.length) {
        /*alert(choiceList);*/
        result.textContent = choiceList.join(', ');
    } else {
        /*alert('ничего не выбрано.');*/
        result.textContent = 'ничего не выбрано.';
    }
}