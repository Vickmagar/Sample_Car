// Este archivo hace aparecer y desaparece la imagen de los botones

let btn = document.querySelector('.formulario__btn2');
let imgBtn = document.querySelector('.img_btn');

btn.addEventListener('mousedown', function() {
    imgBtn.style.display = 'block';
});

btn.addEventListener('mouseup', function() {
    imgBtn.style.display = 'none';
});

// aparece y desaparece imagen 2
// Este archivo hace aparecer y desaparece la imagen de los botones

let btn2 = document.querySelector('.formulario__btn3');
let imgBtn2 = document.querySelector('.img_btn3');

btn2.addEventListener('mousedown', function() {
    imgBtn2.style.display = 'block';
});

btn2.addEventListener('mouseup', function() {
    imgBtn2.style.display = 'none';
});