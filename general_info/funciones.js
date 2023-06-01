// Este archivo hace aparecer y desaparece la imagen de los botones

let btn = document.querySelector('.formulario__btn2');
let imgBtn = document.querySelector('.img_btn');

btn.addEventListener('mousedown', function() {
    imgBtn.style.display = 'block';
});

btn.addEventListener('mouseup', function() {
    imgBtn.style.display = 'none';
});