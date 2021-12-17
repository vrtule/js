const ctverecky = document.querySelectorAll('.ctverecek')
const krtek = document.querySelectorAll('.krtek')
let zbyvajiciCas = document.querySelector('#zbyvajiciCas')
let body = document.querySelector('#body')


let vysledek = 0
let trefa
let cas = 60


function nahodnyCtverecek() {
    ctverecky.forEach(ctverecek => {
        ctverecek.classList.remove('krtek')
    })

    let nahodnaPozice = ctverecky[Math.floor(Math.random() * 9)]
    nahodnaPozice.classList.add('krtek')

    trefa = nahodnaPozice.id
}

ctverecky.forEach(ctverecek => {
    ctverecek.addEventListener('mousedown', () => {
        if(ctverecek.id == trefa) {
            vysledek ++
            body.textContent = vysledek
            trefa = null
        }
    })
})

function pohniKrtka() {
    casovacId = setInterval(nahodnyCtverecek, 500)
}

pohniKrtka()

function odpocitavej() {
    cas --
    zbyvajiciCas.textContent = cas

    if(cas == 0) {
        clearInterval(casovac)
        clearInterval(casovacId)
        alert("Konce hry, získal jsi " + vysledek + " bodů")
    }
}
let casovac = setInterval(odpocitavej, 1000)