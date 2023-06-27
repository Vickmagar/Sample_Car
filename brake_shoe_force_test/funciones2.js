//Para reutilizar el código JavaScript en varias secciones de tu HTML,
// podrías encapsular el comportamiento dentro de una función.



function addEventListenerToButton(buttonClass, imageClass) {
    let btn = document.querySelector(buttonClass);
    let imgBtn = document.querySelector(imageClass);

    btn.addEventListener('mousedown', function() {
        imgBtn.style.display = 'block';
    });

    btn.addEventListener('mouseup', function() {
        imgBtn.style.display = 'none';
    });
}

addEventListenerToButton('.formulario__btn', '.img_btn');
addEventListenerToButton('.formulario__btn2', '.img_btn2');
addEventListenerToButton('.formulario__btn3', '.img_btn3');
addEventListenerToButton('.formulario__btn4', '.img_btn4');
addEventListenerToButton('.formulario__btn5', '.img_btn5');
addEventListenerToButton('.formulario__btn6', '.img_btn6');
addEventListenerToButton('.formulario__btn7', '.img_btn7');
addEventListenerToButton('.formulario__btn8', '.img_btn8');
addEventListenerToButton('.formulario__btn9', '.img_btn9');
addEventListenerToButton('.formulario__btn10', '.img_btn10');
addEventListenerToButton('.formulario__btn11', '.img_btn11');
addEventListenerToButton('.formulario__btn12', '.img_btn12');
addEventListenerToButton('.formulario__btn13', '.img_btn13');
addEventListenerToButton('.formulario__btn14', '.img_btn14');
addEventListenerToButton('.formulario__btn15', '.img_btn15');
addEventListenerToButton('.formulario__btn16', '.img_btn16');
addEventListenerToButton('.formulario__btn17', '.img_btn17');
addEventListenerToButton('.formulario__btn18', '.img_btn18');
addEventListenerToButton('.formulario__btn19', '.img_btn19');
addEventListenerToButton('.formulario__btn20', '.img_btn20');
addEventListenerToButton('.formulario__btn21', '.img_btn21');
addEventListenerToButton('.formulario__btn22', '.img_btn22');
addEventListenerToButton('.formulario__btn23', '.img_btn23');
addEventListenerToButton('.formulario__btn24', '.img_btn24');
addEventListenerToButton('.formulario__btn25', '.img_btn25');
addEventListenerToButton('.formulario__btn26', '.img_btn26');