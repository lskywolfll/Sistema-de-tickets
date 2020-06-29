
const { io } = require('../server');

io.on('connection', client => {
    console.log("Un usuario conectado")

    // Usamos el cliente para poder controlar todos los eventos que el mande u en caso ocurra como cuando se establece una conexion conjunto a una desconexion

    client.on('disconnect', () => {
        console.log('Usuario desconectado')
    });

    // Escuchar desde el cliente el hola para poder obtenerlo en el servidor y el segundo parametro seria todo loq ue nos mande que queria en este caso nuestro un unico parametro  
    client.on('hola', (nombre, apellido) => {
        console.log(nombre)
        console.log(apellido)
    });

    client.on('enviarMensaje', (data) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
    });
});
