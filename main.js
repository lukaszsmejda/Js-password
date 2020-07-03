const input = document.getElementById('pass');
const passwords = ["The", "Great"];
const messages = [" harder you work for something, the greater you'll feel when you achieve it.", "things never come from comfort zones."];
const div = document.querySelector('.message')
input.addEventListener('input', (e) => {
    div.textContent = '';
    const text = e.target.value;

    passwords.forEach((password, index) => {

        if (password.toLowerCase() === text) {
            div.textContent = messages[index];
            e.target.value = '';
        } else if (password === text) {
            div.textContent = messages[index];
            e.target.value = '';
        }
    })

})

input.addEventListener('focus', (e) => {
    e.target.classList.add('active')
})

input.addEventListener('blur', (e) => {
    e.target.classList.remove('active')
})