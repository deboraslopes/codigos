import { pato } from "./pato"
import { galinha } from "./galinha"

 export class PatoAdapter implements pato{
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