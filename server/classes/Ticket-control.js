const fs = require('fs');

class TicketControl {
    constructor() {
        this.ultimo = 0;
        this.hoy = new Date().getDate();

        let { hoy, ultimo } = require('../data/data.json');

        if (hoy === this.hoy) {
            this.ultimo = ultimo;
        } else {
            this.reiniciarConteo();
        }
    }

    siguiente() {
        this.ultimo += 1;
        this.grabarArchivo();

        return `Ticket ${this.ultimo}`
    }

    grabarArchivo() {
        let jsonData = {
            ultimo: this.ultimo,
            hoy: this.hoy
        }

        let jsonDataString = JSON.stringify(jsonData);

        fs.writeFileSync('./server/data/data.json', jsonDataString);
    }

    reiniciarConteo() {
        this.ultimo = 0;
        this.grabarArchivo();
    }
}


module.exports = {
    TicketControl
};