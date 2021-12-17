'use strict';

const auto = new Auto('Dačka');
const karel = new Clovek('Karel', auto);
const bohdan = new Clovek('Bohdan', auto);

karel.auto.jed(30);
bohdan.auto.jed(30);
bohdan.auto.natankuj(50);
bohdan.auto.jed(10);
document.write(karel);
document.write(bohdan);

bohdan.auto = new Auto('Škoda');
bohdan.auto.jed(30);
document.write(karel);
document.write(bohdan);