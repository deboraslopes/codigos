import { ProductPrococol } from "./lanche-protocol";

export class SandubaFrango implements ProductPrococol {
    private name = 'Sanduiche de Frango Assado'
    private price = 4.50
        
    getName (): string {
        return this.name
    }

    getPrice(): number {
        return this.price
    }
}