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

// socket.on('siguienteTicket', (data) => {
//     console.log('Deme mi ticket!')
//     console.log(data)
// })
// eslint-disable-next-line no-undef
$('button').on('click', () => {
    // console.log('click');
    socket.emit('siguienteTicket', null, (siguienteTicket) => {
        label.text(siguienteTicket)
    });
});