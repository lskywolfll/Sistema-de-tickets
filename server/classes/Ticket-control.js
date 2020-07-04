const fs = require('fs');

class Ticket {
    constructor(numero, escritorio) {
        this.numero = numero;
        this.escritorio = escritorio;
    }


}

class TicketControl {
    constructor() {
        this.ultimo = 0;
        this.hoy = new Date().getDate();
        this.tickets = [];

        let { hoy, ultimo, tickets } = require('../data/data.json');

        if (hoy === this.hoy) {
            this.ultimo = ultimo;
            this.tickets = tickets;
        } else {
            this.reiniciarConteo();
        }
    }

    siguiente() {
        this.ultimo += 1;

        const ticket = new Ticket(this.ultimo, null);
        this.tickets.push(ticket);

        this.grabarArchivo();

        return `Ticket ${this.ultimo}`
    }

    getUltimoTicket() {
        return `Ticket ${this.ultimo}`
    }

    grabarArchivo() {
        let jsonData = {
            ultimo: this.ultimo,
            hoy: this.hoy,
            tickets: this.tickets
        }

        let jsonDataString = JSON.stringify(jsonData);

        fs.writeFileSync('./server/data/data.json', jsonDataString);
    }

    reiniciarConteo() {
        this.ultimo = 0;
        this.tickets = [];
        this.grabarArchivo();
    }
}


module.exports = {
    TicketControl
};