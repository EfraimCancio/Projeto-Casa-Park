const modal01 = document.getElementById('stories-modal-left01'); 
const open01 = document.getElementById('open-modal01');
const close01 = document.getElementById('close-modal01');
open01.addEventListener('click', () => {
    modal01.classList.add('show');
})
close01.addEventListener('click', () => {
    modal01.classList.add('hide');
    setTimeout(function(){
        modal01.classList.remove('show');
        modal01.classList.remove('hide');
    }, 1000);
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

const modal03 = document.getElementById('stories-modal-left02');
const open03 = document.getElementById('open-modal03');
const close03 = document.getElementById('close-modal03');

open03.addEventListener('click', () => {
    modal03.classList.add('show');
})
close03.addEventListener('click', () => {
    modal03.classList.remove('show');
})

const modal04 = document.getElementById('stories-modal-right02');
const open04 = document.getElementById('open-modal04');
const close04 = document.getElementById('close-modal04');

open04.addEventListener('click', () => {
    modal04.classList.add('show');
})
close03.addEventListener('click', () => {
    modal04.classList.remove('show');
})

const modal05 = document.getElementById('stories-modal-left03');
const open05 = document.getElementById('open-modal05');
const close05 = document.getElementById('close-modal05');

open05.addEventListener('click', () => {
    modal05.classList.add('show');
})
close05.addEventListener('click', () => {
    modal05.classList.remove('show');
})

const modal06 = document.getElementById('stories-modal-right03');
const open06 = document.getElementById('open-modal06');
const close06 = document.getElementById('close-modal06');

open06.addEventListener('click', () => {
    modal06.classList.add('show');
})
close06.addEventListener('click', () => {
    modal06.classList.remove('show');
})

const modal07 = document.getElementById('stories-modal-left04');
const open07 = document.getElementById('open-modal07');
const close07 = document.getElementById('close-modal07');

open07.addEventListener('click', () => {
    modal07.classList.add('show');
})
close07.addEventListener('click', () => {
    modal07.classList.remove('show');
})

const modal08 = document.getElementById('stories-modal-right04');
const open08 = document.getElementById('open-modal08');
const close08 = document.getElementById('close-modal08');

open08.addEventListener('click', () => {
    modal08.classList.add('show');
})
close08.addEventListener('click', () => {
    modal08.classList.remove('show');
})

const modal09 = document.getElementById('stories-modal-left05');
const open09 = document.getElementById('open-modal09');
const close09 = document.getElementById('close-modal09');

open09.addEventListener('click', () => {
    modal09.classList.add('show');
})
close09.addEventListener('click', () => {
    modal09.classList.remove('show');
})

const modal10 = document.getElementById('stories-modal-right05');
const open10 = document.getElementById('open-modal10');
const close10 = document.getElementById('close-modal10');

open10.addEventListener('click', () => {
    modal10.classList.add('show');
})
close10.addEventListener('click', () => {
    modal10.classList.remove('show');
})

