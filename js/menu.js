let btn = document.getElementById('menu-button');
let btn_close = document.getElementById('close')
let menu = document.querySelector('.navbar .navbar__enlaces');


btn.addEventListener('click', () => {
    menu.classList.remove('--cerrado');
    btn.classList.add('--hidden')
});
btn_close.addEventListener('click', () => {
    menu.classList.add('--cerrado');
    btn.classList.remove('--hidden');
})
