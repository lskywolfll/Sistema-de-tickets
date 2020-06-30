
const { io } = require('../server');
const { TicketControl } = require('../classes/Ticket-control');

const ticketControl = new TicketControl;

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
        // Esto le envia un evento a todos los clientes que esten conectados
        client.broadcast.emit('enviarMensaje', data);
    });

    client.on('siguienteTicket', (data, callback) => {
        // console.log('Cual es el siguiente ticket');
        callback(ticketControl.siguiente());
        // client.emit('siguienteTicket', ticketControl.siguiente())}
    })
});
