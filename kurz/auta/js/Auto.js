'use strict';

class Auto {
    constructor(nazev) {
        this.nazev = nazev;
        this.palivo = 50;
        this.tachometr = 0;
    }

    jed(vzdalenost) {
        if (vzdalenost <= this.palivo) {
            this.tachometr += vzdalenost;
            this.palivo -= vzdalenost;
            document.write(`Auto ${this.nazev} ujelo ${vzdalenost}km.<br>`);
        } else {
            const naCoStaciloPalivo = this.palivo;
            this.tachometr += naCoStaciloPalivo;
            this.palivo = 0;
            document.write(`Auto ${this.nazev} ujelo ${vzdalenost}km.<br>`);
            document.write(`Došlo palivo, je potřeba natankovat.<br>`)

        }
    }

    natankuj(mnozstvi) {
        this.palivo += mnozstvi;
        document.write(`Auto je natankováno, stav paliva je ${this.palivo}l.<br>`);
    }
}
