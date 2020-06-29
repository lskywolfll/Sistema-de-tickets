const socket = io();

socket.on('connect', () => {
    console.log('conectado en el servidor');
})

// Socket on => a escuchar un evento especifico
socket.on('disconnect', () => {
    console.log("Perdimos la conexion con el servidor");
});

socket.on('enviarMensaje', (data) => {
    console.log(data);
})

// Envio de informacion para el servidor para que haga lo que deba hacer con todo lo que deba con toda la informacion que se le esta enviando 
socket.emit('hola', { nombre: 'Rene' }, { apellido: 'Sanchez' })

socket.emit('enviarMensaje', { nombre: 'Rene' })