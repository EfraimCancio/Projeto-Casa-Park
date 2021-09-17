const open1 = document.getElementById('open-modal1');
const modal1 = document.getElementById('house-modal1');
const close1 = document.getElementById('close-modal1');

open1.addEventListener('click', () => {
    modal1.classList.add('show');
})
close1.addEventListener('click', () => {
    modal1.classList.add('hide');
    setTimeout(function () {
        modal1.classList.remove('show');
        modal1.classList.remove('hide');
    }, 1000);
})