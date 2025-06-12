const btn = document.querySelector("#btn");  //элемент btn
const radioElements = document.querySelectorAll('[name="goods"]'); //элементы radio

const choiceGood = { //объект для характеристик выбранного товара
    value: "",
    price: 0,
    size: "",
};

radioElements.forEach(el => {
    el.addEventListener("change", function() {
        if (el.checked) {
            choiceGood.value = el.value;
            choiceGood.price = +el.dataset.price;
            choiceGood.size = el.dataset.size;
            }
        console.log(choiceGood);  //выводим в консоль объект
        })
    });

/*
btn.addEventListener("click", function() { //по клику на кнопку
    radioElements.forEach(element => {     //проверяем каждый элемент radio
        if (element.checked) {             //если элемент выбран
            choiceGood.value = element.value;                   //записываем значение value
            choiceGood.price = parseInt(element.dataset.price); //записываем значение из dataset price (преобразуя в целое число)
            choiceGood.size = element.dataset.size;             //записываем значение из dataset size
        }
    })
    console.log(choiceGood);  //выводим в консоль объект
});*/