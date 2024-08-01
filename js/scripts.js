// Datos del formulario
const datos = {
    nombre: '',
    email: '',
    mensaje: '',
};

// Selección de elementos del DOM
const nombreInput = document.querySelector('#nombre');
const emailInput = document.querySelector('#email');
const mensajeInput = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

// Añadir eventos a los inputs
nombreInput.addEventListener('input', leerTexto);
emailInput.addEventListener('input', leerTexto);
mensajeInput.addEventListener('input', leerTexto);

// Evento de envío del formulario
formulario.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevenir el envío del formulario

    // Destructuración para obtener los valores
    const { nombre, email, mensaje } = datos;

    // Validar que todos los campos están llenos
    if (nombre === '' || email === '' || mensaje === '') {
        mostrarError('Todos los campos son obligatorios');
        return;
    }

    // Mostrar mensaje de éxito
    mostrarMensaje('Mensaje enviado correctamente');
});

// Función para actualizar los datos del formulario
function leerTexto(e) {
    datos[e.target.id] = e.target.value;
}

// Función para mostrar mensaje de éxito
function mostrarMensaje(mensaje) {
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    alerta.classList.add('correcto');
    formulario.appendChild(alerta);

    // Eliminar mensaje después de 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}

// Función para mostrar mensaje de error
function mostrarError(mensaje) {
    const error = document.createElement('p');
    error.textContent = mensaje;
    error.classList.add('error');
    formulario.appendChild(error);

    // Eliminar error después de 5 segundos
    setTimeout(() => {
        error.remove();
    }, 5000);
}
