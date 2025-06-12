let goods = document.querySelectorAll('[name="food"]');
let result = document.querySelector('.result');

function calculate() {
    let totalSum = 0;
    for (let product of goods) {
        if (product.checked) {
            totalSum += parseInt(product.value);
        }
    }
    result.textContent = totalSum;
}