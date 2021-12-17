'use strict';

class Kalkulacka {

    constructor() {
        this.cislo1 = 0;
        this.cislo2 = 0;


        this.cislo1Input = document.getElementById('cislo1');
        this.cislo2Input = document.getElementById('cislo2');
        this.vypocitatButton = document.getElementById('vypocitat');
        this.vysledkyElement = document.getElementById('vysledky');


        this.vypocitatButton.onclick = () => {
            this.cislo1 = parseFloat(this.cislo1Input.value);
            this.cislo2 = parseFloat(this.cislo2Input.value);

            this.vysledkyElement.innerHTML = `<h2>Výsledky</h2>
            Součet: ${this.scitani()} <br>
            Rozdíl: ${this.odcitani()} <br>
            Součin: ${this.nasobeni()} <br>
            Podíl: ${this.deleni()}`;
        }
    }


    scitani() {
        return this.cislo1 + this.cislo2;
    }

    odcitani() {
        return this.cislo1 - this.cislo2;
    }

    nasobeni() {
        return this.cislo1 * this.cislo2;
    }

    deleni() {
        return this.cislo1 / this.cislo2;
    }

}


