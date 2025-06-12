const contactChecked = {    // объект
    email: false,           // ключ "email" - значение false
    phone: false,           // ключ "phone" - значение false
    mail: false,            // ключ "mail" - значение false
};
const btn = document.querySelector("#btn");  //элемент btn
const checkboxElements = document.querySelectorAll('[name="contact"]'); //элементы checkbox

checkboxElements.forEach(element => {    //для каждого элемента checkbox
    element.addEventListener("change", function() {
        contactChecked[element.value] = element.checked;
        console.log(contactChecked);                    //выведем в консоль объект
    })
});