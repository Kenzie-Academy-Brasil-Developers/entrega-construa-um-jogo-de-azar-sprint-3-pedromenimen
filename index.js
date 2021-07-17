function janken() {

    console.log(Math.floor(Math.random() * 3) + 1)
}
let derrota = document.querySelector("#lose")
let empate = document.querySelector("#draw")
let vitoria = document.querySelector("#win")

// 1
let botaopedra = document.querySelector("#rock")
botaopedra.addEventListener("click", function () {
    if (Math.floor(Math.random() * 3) + 1 === 2) {
        vitoria.classList.remove("hide")
    } else if (Math.floor(Math.random() * 3) + 1 === 3) {
        derrota.classList.remove("hide")
    } else {
        empate.classList.remove("hide")
    }
}
)

// 2
let botaotesoura = document.querySelector("#scissor")
botaotesoura.addEventListener("click", function () {
    if (Math.floor(Math.random() * 3) + 1 === 3) {
        vitoria.classList.remove("hide")
    } else if (Math.floor(Math.random() * 3) + 1 === 1) {
        derrota.classList.remove("hide")
    } else {
        empate.classList.remove("hide")
    }
}
)

// 3
let botaopapel = document.querySelector("#paper")
botaopapel.addEventListener("click", function () {
    if (Math.floor(Math.random() * 3) + 1 === 1) {
        vitoria.classList.remove("hide")
    } else if (Math.floor(Math.random() * 3) + 1 === 2) {
        derrota.classList.remove("hide")
    } else {
        empate.classList.remove("hide")
    }
}
)

let botaoresetlose = document.querySelector("#resetlose")
botaoresetlose.addEventListener("click", function () {
    let resetlose = document.querySelector("#lose")
    resetlose.classList.add("hide")
})

let botaoresetdraw = document.querySelector("#resetdraw")
botaoresetdraw.addEventListener("click", function () {
    let resetdraw = document.querySelector("#draw")
    resetdraw.classList.add("hide")
})

let botaoresetwin = document.querySelector("#resetwin")
botaoresetwin.addEventListener("click", function () {
    let resetwin = document.querySelector("#win")
    resetwin.classList.add("hide")
})