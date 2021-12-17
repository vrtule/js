'use strict';

class Clovek {
    constructor(jmeno, auto) {
        this.jmeno = jmeno;
        this.auto = auto;
    }

    toString() {
        return `${this.jmeno} má auto ${this.auto.nazev} se stavem tachometru ${this.auto.tachometr} a stavem palive ${this.auto.palivo}l.<br>`;
    }
}