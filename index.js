let derrota = document.querySelector("#lose")
let empate = document.querySelector("#draw")
let vitoria = document.querySelector("#win")
let tesouraOponente = document.querySelector(".tesouraoponente")
let pedraOponente = document.querySelector(".pedraoponente")
let papelOponente = document.querySelector(".papeloponente")

// 1
let botaopedra = document.querySelector("#rock")
botaopedra.addEventListener("click", function () {
    if (Math.floor(Math.random() * 3) + 1 === 2) {
        vitoria.classList.remove("hide")
        tesouraOponente.classList.remove("hide")
    } else if (Math.floor(Math.random() * 3) + 1 === 3) {
        derrota.classList.remove("hide")
        papelOponente.classList.remove("hide")
    } else {
        empate.classList.remove("hide")
        pedraOponente.classList.remove("hide")
    }
}
)

// 2
let botaotesoura = document.querySelector("#scissor")
botaotesoura.addEventListener("click", function () {
    if (Math.floor(Math.random() * 3) + 1 === 3) {
        vitoria.classList.remove("hide")
        papelOponente.classList.remove("hide")
    } else if (Math.floor(Math.random() * 3) + 1 === 1) {
        derrota.classList.remove("hide")
        pedraOponente.classList.remove("hide")
    } else {
        empate.classList.remove("hide")
        tesouraOponente.classList.remove("hide")
    }
}
)

// 3
let botaopapel = document.querySelector("#paper")
botaopapel.addEventListener("click", function () {
    if (Math.floor(Math.random() * 3) + 1 === 1) {
        vitoria.classList.remove("hide")
        pedraOponente.classList.remove("hide")
    } else if (Math.floor(Math.random() * 3) + 1 === 2) {
        derrota.classList.remove("hide")
        tesouraOponente.classList.remove("hide")
    } else {
        empate.classList.remove("hide")
        papelOponente.classList.remove("hide")
    }
}
)

let botaoresetlose = document.querySelector("#resetlose")
botaoresetlose.addEventListener("click", function () {
    let resetlose = document.querySelector("#lose")
    resetlose.classList.add("hide")
    document.getElementsByTagName("img")[3].classList.add("hide")
    document.getElementsByTagName("img")[4].classList.add("hide")
    document.getElementsByTagName("img")[5].classList.add("hide")
})

let botaoresetdraw = document.querySelector("#resetdraw")
botaoresetdraw.addEventListener("click", function () {
    let resetdraw = document.querySelector("#draw")
    resetdraw.classList.add("hide")
    document.getElementsByTagName("img")[3].classList.add("hide")
    document.getElementsByTagName("img")[4].classList.add("hide")
    document.getElementsByTagName("img")[5].classList.add("hide")
})

let botaoresetwin = document.querySelector("#resetwin")
botaoresetwin.addEventListener("click", function () {
    let resetwin = document.querySelector("#win")
    resetwin.classList.add("hide")
    document.getElementsByTagName("img")[3].classList.add("hide")
    document.getElementsByTagName("img")[4].classList.add("hide")
    document.getElementsByTagName("img")[5].classList.add("hide")
})