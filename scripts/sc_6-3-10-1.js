const user = {
    name: "",
    surname: "",
};
const btn = document.querySelector("#btn");
const inputName = document.querySelector("#name");
const inputSurname = document.querySelector("#surname");
const result = document.querySelector(".result");

btn.addEventListener("click", function() {
    user.name = inputName.value;
    user.surname = inputSurname.value;
    console.log(user);
    result.textContent = `Объект: ${user.name} ${user.surname}`;
})