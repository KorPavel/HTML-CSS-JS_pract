userName = document.querySelector('.userName');
userFamily = document.querySelector('.userFamily');
answer = document.querySelector('.answer');
submit = document.querySelector('.btn');

/*submit.addEventListener("click", function() {
    answer.textContent = `Здравствуйте, ${userName.value} ${userFamily.value}!`;
});*/

function greeting() {
    if (userName.value || userFamily.value) {
        answer.style.textTransform = 'capitalize';
        answer.textContent = `Здравствуйте, ${userName.value} ${userFamily.value}!`;
    } else {
        answer.textContent = "Вы ещё не представились.☹️";
    }
}