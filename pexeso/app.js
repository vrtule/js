document.addEventListener('DOMContentLoaded', () => {
    
    const poleKaret = [
      {
        name: 'jezek',
        img: 'obrazky/jezek.jpg'
      },
      {
        name: 'jezek',
        img: 'obrazky/jezek.jpg'
      },
      {
        name: 'krokodyl',
        img: 'obrazky/krokodyl.jpg'
      },
      {
        name: 'krokodyl',
        img: 'obrazky/krokodyl.jpg'
      },
      {
        name: 'los',
        img: 'obrazky/los.jpg'
      },
      {
        name: 'los',
        img: 'obrazky/los.jpg'
      },
      {
        name: 'medved',
        img: 'obrazky/medved.jpg'
      },
      {
        name: 'medved',
        img: 'obrazky/medved.jpg'
      },
      {
        name: 'myval',
        img: 'obrazky/myval.jpg'
      },
      {
        name: 'myval',
        img: 'obrazky/myval.jpg'
      },
      {
        name: 'nosorozec',
        img: 'obrazky/nosorozec.jpg'
      },
      {
        name: 'nosorozec',
        img: 'obrazky/nosorozec.jpg'
      }
    ]

    poleKaret.sort(() => 0.5 - Math.random())
    
    const mrizka = document.querySelector('.mrizka')
    const vypisVysledku = document.querySelector('#vysledek')
    let vybraneKarty = []
    let vybraneKartyID = []
    let hotoveDvojce = []

    function vytvorMrizku() {
        for (let i = 0; i < poleKaret.length; i++) {
            const karta = document.createElement('img')
            karta.setAttribute('src', 'obrazky/zadni.jpg')
            karta.setAttribute('data-id', i)
            karta.addEventListener('click', otocKartu)
            mrizka.appendChild(karta)
        }
    }

    function zkontrolujDve() {
        const karty = document.querySelectorAll('img')
        const prvniVolba = vybraneKartyID[0]
        const druhaVolba = vybraneKartyID[1]

        if (prvniVolba == druhaVolba) {
            karty[prvniVolba].setAttribute('src', 'obrazky/zadni.jpg')
            karty[druhaVolba].setAttribute('src', 'obrazky/zadni.jpg')
            alert('Dvě stejné karty')
        } else if (vybraneKarty[0] === vybraneKarty[1]) {
            alert("Našel jsi dvě stejné karty")
            karty[prvniVolba].setAttribute('src', 'obrazky/prazdny.jpg')
            karty[druhaVolba].setAttribute('src', 'obrazky/prazdny.jpg')
            karty[prvniVolba].removeEventListener('click', otocKartu)
            karty[druhaVolba].removeEventListener('click', otocKartu)
            hotoveDvojce.push(vybraneKarty)
        } else {
            karty[prvniVolba].setAttribute('src', 'obrazky/zadni.jpg')
            karty[druhaVolba].setAttribute('src', 'obrazky/zadni.jpg')
            alert("Špatně, zkus to znovu")
        }

        vybraneKarty = []
        vybraneKartyID = []


        vypisVysledku.textContent = hotoveDvojce.length

        if (hotoveDvojce.length === poleKaret.length / 2) {
            vypisVysledku.textContent = "Našel jsi je všechny"
        }

    } 

    function otocKartu() {
        let IDKarty = this.getAttribute('data-id')
        vybraneKarty.push(poleKaret[IDKarty].name)
        vybraneKartyID.push(IDKarty)
        this.setAttribute('src', poleKaret[IDKarty].img)
        if (vybraneKarty.length === 2) {
            setTimeout(zkontrolujDve, 500)
        }
    }
    vytvorMrizku()
})