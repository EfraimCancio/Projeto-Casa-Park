const modal01 = document.getElementById('stories-modal-left01'); 
const open01 = document.getElementById('open-modal01');
const close01 = document.getElementById('close-modal01');
open01.addEventListener('click', () => {
    modal01.classList.add('show');
})
close01.addEventListener('click', () => {
    modal01.classList.remove('show');
})

const modal02 = document.getElementById('stories-modal-right01');
const open02 = document.getElementById('open-modal02');
const close02 = document.getElementById('close-modal02');

open02.addEventListener('click', () => {
    modal02.classList.add('show');
})
close02.addEventListener('click', () => {
    modal02.classList.remove('show');
})