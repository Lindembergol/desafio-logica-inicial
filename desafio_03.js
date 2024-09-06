// Escrevendo as classes de um Jogo

class heroi{
    constructor(heroiName, idadeHeroi, tipoHeroi){
        this.heroiName = heroiName,
        this.idadeHeroi = idadeHeroi,
        this.tipoHeroi = tipoHeroi
    }

    atacar(){
        if (this.tipoHeroi == 'mago') {
            console.log(`O ${this.tipoHeroi} atacou usando magia`)
        } else if (this.tipoHeroi == 'guerreiro') {
            console.log(`O ${this.tipoHeroi} atacou usando espada`)
        }else if (this.tipoHeroi == 'monge') {
            console.log(`O ${this.tipoHeroi} atacou usando artes marciais`)
        }else if (this.tipoHeroi == 'ninja') {
            console.log(`O ${this.tipoHeroi} atacou usando shuriken`)
        }
    }
}

let meuHeroi = new heroi('Lindemberg', 35, 'monge')
meuHeroi.atacar()