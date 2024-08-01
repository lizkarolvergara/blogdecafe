const datos = {
    nombre: '',
    email: '',
    mensaje: '',
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input');
email.addEventListener('input');
mensaje.addEventListener('input');

formulario.addEventListener('sumbit', function(e){
    e.preventDefault('Enviando formulario')

    const {nombre,email,mensaje} = datos;
    
    if(nombre === '' || email === '' || mensaje === '') {
        mostrarError('Todos los campos son obligatorios');

        return;
    }

    mostrarMensaje('Mensaje enviado correctamente');
})


//mensaje de éxito mensaje enviado
function mostrarMensaje(mensaje) {
    const alerta = document.createElement('p');
    alerta.textContent = mensaje
    alerta.classList.add('correcto')

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 5000)
}


//mensaje de error si no se envía correctamente el correo
function mostrarError(mensaje) {
    const error = document.createElement('p');
    error.textContent = mensaje;
    error.classList.add('error');
    
    formulario.appendChild( error );

    setTimeout (() => { // hacer que la alerta desaparezca después de cierto tiempo
        error.remove();
    }, 5000); //5 segundos
}




