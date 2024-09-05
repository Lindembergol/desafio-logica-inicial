// Calculadora de partidas Rankeadas

let wins = 150
let loses = 5

let winningBalance = balanceRanked(wins, loses)
heroclass(winningBalance)

function balanceRanked(wins, loses){
    let result = wins - loses
    return result
}

function heroclass(winningBalance){
    if (winningBalance < 10) {
        console.log(`O Herói tem saldo de ${winningBalance} vitórias, está no nível de Ferro`)
    } else if (winningBalance > 10 && winningBalance <= 20) {
        console.log(`O Herói tem saldo de ${winningBalance} vitórias, está no nível de Bronze`)
    } else if (winningBalance > 11 && winningBalance <= 50) {
        console.log(`O Herói tem saldo de ${winningBalance} vitórias, está no nível de Prata`)
    } else if (winningBalance > 51 && winningBalance <= 80) {
        console.log(`O Herói tem saldo de ${winningBalance} vitórias, está no nível de Ouro`)
    } else if (winningBalance > 81 && winningBalance <= 90) {
        console.log(`O Herói tem saldo de ${winningBalance} vitórias, está no nível de Diamante`)
    } else if (winningBalance > 91 && winningBalance <= 100) {
        console.log(`O Herói tem saldo de ${winningBalance} vitórias, está no nível de Lendário`)
    } else {
        console.log(`O Herói tem saldo de ${winningBalance} vitórias, está no nível de Imortal`)
    }
}