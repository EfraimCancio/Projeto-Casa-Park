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

const open2 = document.getElementById('open-modal2');
const modal2 = document.getElementById('house-modal2');
const close2 = document.getElementById('close-modal2');
open2.addEventListener('click', () => {
    modal2.classList.add('show');
})
close2.addEventListener('click', () => {
    modal2.classList.add('hide');
    setTimeout(function () {
        modal2.classList.remove('show');
        modal2.classList.remove('hide');
    }, 1000);
})

const open3 = document.getElementById('open-modal3');
const modal3 = document.getElementById('house-modal3');
const close3 = document.getElementById('close-modal3');
open3.addEventListener('click', () => {
    modal3.classList.add('show');
})
close3.addEventListener('click', () => {
    modal3.classList.add('hide');
    setTimeout(function () {
        modal3.classList.remove('show');
        modal3.classList.remove('hide');
    }, 1000);
})