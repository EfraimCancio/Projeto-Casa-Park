const open = document.getElementById('open-modal'); 
const modal = document.getElementById('stories-modal'); 
const close = document.getElementById('close-modal');

open.addEventListener('click', () => {
    modal.classList.add('show');
})
close.addEventListener('click', () => {
    modal.classList.remove('show');
})