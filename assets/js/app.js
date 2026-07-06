
const posicionAlerta = document.getElementById('alertaMensaje');

const crearMensaje = (mensaje) => {
   
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
        '<div class="alert alert-success alert-dismissible fade show mt-5" role="alert">',
        `   <strong>${mensaje}</strong>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('');

    posicionAlerta.append(wrapper);
}

$('#enviarMensaje').hover(() => {
    $("#enviarMensaje").tooltip("enable");
});
$('#enviarMensaje').click(() => {
   crearMensaje("El correo fue enviado correctamente...");
});