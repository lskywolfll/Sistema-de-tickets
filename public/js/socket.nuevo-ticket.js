// eslint-disable-next-line no-undef
const socket = io();
// eslint-disable-next-line no-undef
const label = $('#lblNuevoTicket');

socket.on('connect', () => {
    console.log('Conectado al servidor');
});

socket.on('disconnect', () => {
    console.log('Desconectado del servidor')
});

socket.on('estadoActual', ({ actual }) => {
    label.text(actual);
});

// socket.on('siguienteTicket', (data) => {
//     console.log('Deme mi ticket!')
//     console.log(data)
// })
// eslint-disable-next-line no-undef
$('button').on('click', () => {
    // console.log('click');
    // Existe un null que serian los datos a mandar para la emision de algo, asi que podriamos tambien intercambiarlo por un objeto que contenga alguna cosa que nosotros requiramos
    socket.emit('siguienteTicket', null, (siguienteTicket) => {
        label.text(siguienteTicket)
    });
});