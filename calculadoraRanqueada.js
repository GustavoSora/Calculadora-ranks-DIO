function stats(win, defeat) {
    let saldoVitorias = win - defeat
    return saldoVitorias
}

let saldo = stats(100, 30)
let rank = saldo
let nivel

if (rank <= 10) {
    nivel = "ferro"
} else if (rank >= 11 && rank <= 20) {
    nivel = "bronze"
} else if (rank >= 21 && rank <= 50) {
    nivel = "prata"
} else if (rank >= 51 && rank <= 80) {
    nivel = "ouro"
} else if (rank >= 81 && rank <= 90) {
    nivel = "diamante"
} else if (rank >= 91 && rank <= 100) {
    nivel = "lendario"
} else if (rank >= 101) {
    nivel = "imortal"
}

console.log(`O herói tem o saldo de ${saldo} e está no nível de ${nivel}`)

