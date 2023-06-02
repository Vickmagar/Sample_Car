//esta funcion bloquea y desbloquea inputs.

$(document).ready(function() {
    // Inicialmente, desactiva los campos
    $('#tank-car-class').prop('disabled', true);
    $('#remaining').prop('disabled', true);

    // Observa los cambios en el label con id s-2044
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.target.textContent === 'E1' || mutation.target.textContent === 'E2') {
                // Si el texto es E1 o E2, habilita los campos
                $('#tank-car-class').prop('disabled', false);
                $('#remaining').prop('disabled', false);
            } else {
                // Si no, desactiva los campos
                $('#tank-car-class').prop('disabled', true);
                $('#remaining').prop('disabled', true);
            }
        });
    });

    // Configura el observador para observar cambios en el nodo de texto del label
    var targetNode = $('#s-2044')[0];
    observer.observe(targetNode, { childList: true });
});


//----------------------slack adjuster end truck -------------------------

//----id='car_buiit_date2 ----------------------------------------------------------

$(document).ready(function() {
    // Inicialmente, desactiva los campos
    $('#car_buiit_date2').prop('disabled', true);

    // Observa los cambios en el label con id slackmfg1
    var observers = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.target.textContent === 'Amsted' ) {
                // Si el texto es Amsted, habilita los campos
                $('#car_buiit_date2').prop('disabled', false);
            } else {
                // Si no, desactiva los campos
                $('#car_buiit_date2').prop('disabled', true);
            }
        });
    });

    // Configura el observador para observar cambios en el nodo de texto del label
    var targetNode = $('#slackmfg1')[0];
    observers.observe(targetNode, { childList: true });
});

//-----------------------------------------------------------------------------------

//----id='location' ----------------------------------------------------------

$(document).ready(function() {
    // Inicialmente, desactiva los campos
    $('#location').prop('disabled', true);

    // Observa los cambios en el label con id number_of_units2
    var observers = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.target.textContent === '1' ) {
                // Si el texto es Amsted, habilita los campos
                $('#location').prop('disabled', false);
            } else {
                // Si no, desactiva los campos
                $('#location').prop('disabled', true);
            }
        });
    });

    // Configura el observador para observar cambios en el nodo de texto del label
    var targetNode = $('#number_of_units2')[0];
    observers.observe(targetNode, { childList: true });
});

//-----------------------------------------------------------------------------------

//----id='car_buiit_date3 ----------------------------------------------------------

$(document).ready(function() {
    // Inicialmente, desactiva los campos
    $('#car_buiit_date3').prop('disabled', true);

    // Observa los cambios en el label con id slackmfg2
    var observers = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.target.textContent === 'Amsted' ) {
                // Si el texto es Amsted, habilita los campos
                $('#car_buiit_date3').prop('disabled', false);
            } else {
                // Si no, desactiva los campos
                $('#car_buiit_date3').prop('disabled', true);
            }
        });
    });

    // Configura el observador para observar cambios en el nodo de texto del label
    var targetNode = $('#slackmfg2')[0];
    observers.observe(targetNode, { childList: true });
});

//-----------------------------------------------------------------------------------


$(document).ready(function() {
    // Inicialmente, desactiva los campos
    $('#modelIt').prop('disabled', true);
    $('#slackmfg2').prop('disabled', true);
    $('#car_buiit_date3').prop('disabled', true);
    $('#slackGroup3').prop('disabled', true);
    $('#slack_type2').prop('disabled', true);

    // Observa los cambios en el label con id number_of_units2
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.target.textContent === '1') {
                // Si el texto es 1, desactiva los campos
                $('#modelIt').prop('disabled', true);
                $('#slackmfg2').prop('disabled', true);
                $('#car_buiit_date3').prop('disabled', true);
                $('#slackGroup3').prop('disabled', true);
                $('#slack_type2').prop('disabled', true);
            } else {
                // Si no, habilita los campos
                $('#modelIt').prop('disabled', false);
                $('#slackmfg2').prop('disabled', false);
                $('#car_buiit_date3').prop('disabled', false);
                $('#slackGroup3').prop('disabled', false);
                $('#slack_type2').prop('disabled', false);
            }
        });
    });

    // Configura el observador para observar cambios en el nodo de texto del label
    var targetNode = $('#number_of_units2')[0];
    observer.observe(targetNode, { childList: true });
});

//----------------------------Codigo para tomar fotografias-------------------------------------------------------

document.getElementById('btnTomarFoto').addEventListener('click', function() {
    document.getElementById('foto').click();
  });