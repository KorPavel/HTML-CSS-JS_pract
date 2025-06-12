const radioButtons = document.querySelectorAll('[name="contact"]');
const resultElement = document.querySelector(".result");
const fillingList = document.querySelector(".list");
let selectedContactValues = [];
let total = 0;

radioButtons.forEach((element) => {
  element.addEventListener("change", function () {
    if (element.checked) {
      selectedContactValues.push(element.value);
      total += +element.value;          //здесь +element.value --> parseInt(element.value)
    } else {
      selectedContactValues.splice(
        selectedContactValues.indexOf(element.value), 1);
      total -= +element.value;
    }
    if (selectedContactValues.length) {
      resultElement.textContent = `${total} руб.`;      // можно через eval(selectedContactValues.join('+'));
      fillingList.textContent = selectedContactValues.join(', ');
    } else {
      resultElement.textContent = "ничего не выбрано.";
      fillingList.textContent = selectedContactValues.join(', ');
    }
  });
});
