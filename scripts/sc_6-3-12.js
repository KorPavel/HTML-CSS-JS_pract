const userSurname = document.querySelector('[name="surname"]');    //получите элемент input с фамилией(*)
const userName = document.querySelector('[name="name"]');       //получите элемент input с именем(*)

const goodsElements = document.querySelectorAll('.checkbox');   //получите элементы checkbox с товарами goods(*)
const countElements =  document.querySelectorAll('[type="number"]'); //получите элементы input с кол-вом(*)

const btn = document.querySelector('.btn');                     //получите элемент button(*)
const resultElem = document.querySelector('.sum');              //получите элемент span для итоговой суммы

//создайте переменную для хранения итоговой суммы (*)
let money = 0;

//Создаём карточку покупателя
const user = {
    firstName: "",
    secondName: "",
    totalValue: 0
};

// Списки продуктов по каждому наименованию представлены в формате [Наименование, цена, количество]
const listsOfGoods = {
    "expresso": [],
    "americano": [],
    "latte": [],
    "capuchino": [],
    "chocolate_muffin": [],
    "blueberry_muffin": [],
    "apple_tart": [],
};

//Костыль: список ключей для итерации объекта
let goodsList = Object.keys(listsOfGoods);


// Отслеживаем заполнение карточки
userName.addEventListener("change",function(){
    user.firstName=userName.value;
});

userSurname.addEventListener("change",function(){
    user.secondName=userSurname.value;
});

//создайте функцию, которая будет считать итоговую сумму, подумайте над формулой.
function calculateTotalCash() {
    let totalCash = 0;
    for (elem of goodsList) {
        if (listsOfGoods[elem].length > 0) {
            totalCash += listsOfGoods[elem][1] * listsOfGoods[elem][2];
        }
    }
    return totalCash;
}

function paymentReceipt() {
    let choiceListGoods = [];
    for (elem of goodsList) {
        if (listsOfGoods[elem].length > 0) {
            let res = listsOfGoods[elem][1] * listsOfGoods[elem][2];
            choiceListGoods.push(`${listsOfGoods[elem][0]} - ${listsOfGoods[elem][2]}шт. = ${res} руб.`);
        }
    }
    return choiceListGoods;
}

// клик по позиции товара: отметка выбора товара и добавление/исключение 1 товара
for (let prod of goodsElements) {
    prod.addEventListener("change", function() {
        if(prod.checked) {
            for (let el of countElements) {
                if (el.getAttribute('id') === prod.dataset.goods) {
                    listsOfGoods[prod.dataset.goods].push(el.dataset.goods)
                    el.value = 1;
                }
            }
            listsOfGoods[prod.dataset.goods].push(parseInt(prod.value));
            listsOfGoods[prod.dataset.goods].push(1);
        } else {
            for (let el of countElements) {
                if (el.getAttribute('id') === prod.dataset.goods) {
                    el.value = 0;
                }
            }
            listsOfGoods[prod.dataset.goods] = [];
        }
        money = calculateTotalCash();
        resultElem.textContent = `${money} руб.`;
        user.totalValue = money;
    })
};

// изменение количества товара
for (let cnt of countElements) {
    cnt.addEventListener('change', function() {
        if (listsOfGoods[cnt.id][2] > 0 && cnt.value > 0 && cnt.value < 100) {
            listsOfGoods[cnt.id][2] = parseInt(cnt.value);
            money = calculateTotalCash();
            resultElem.textContent = `${money} руб.`;
            user.totalValue = money;
        } else {
            cnt.value = 0;
            listsOfGoods[cnt.id] = [];
        }
    })
};

// Вывод сообщения в alert
btn.addEventListener('click',function(){
    if (user.firstName === '' && user.secondName === '') {
        user.firstName = "Тайный";
        user.secondName = "покупатель";
    }
    (paymentReceipt().length !== 0)?
    alert(`Заказчик: ${user.firstName} ${user.secondName}\n
    Ваш заказ:\n${paymentReceipt().join('\n')}\n\nИтого: ${user.totalValue} рублей`):
    alert(`Заказчик: ${user.firstName} ${user.secondName}\n\nВы ещё не выбрали товар.`);
});
