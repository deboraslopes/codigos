interface pato{
    fazerQuaQua(): void
    voarPato(): void
}

class PatoDemo implements pato {
    fazerQuaQua() : void {
        console.log ('Qua Qua')
     }
     voarPato() : void {
        console.log ('Pato Voando')
     }
  }

  interface galinha{
    fazerCocorico() : void
     voarGalinha() : void
  }

  class GalinhaDemo implements galinha {
    fazerCocorico() : void {
       console.log ('Cococoricó')
    }
    voarGalinha() : void{
       console.log ('Galinha Voando!')
    }
 }

 class PatoAdapter implements pato{
    Galinha : galinha

    constructor (Galinha : galinha){
        this.Galinha = Galinha
    }

    fazerQuaQua(): void {
      return this.Galinha.fazerCocorico()
    }
    voarPato(): void {
        return this.Galinha.voarGalinha()
    }
 }

 let pato = new PatoDemo()
 let galinha = new GalinhaDemo()

 let patoadapter = new PatoAdapter (galinha)
 patoadapter.fazerQuaQua()
 patoadapter.voarPato()
