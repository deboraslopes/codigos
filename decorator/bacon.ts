import { ProductPrococol } from "./lanche-protocol";

export class SandubaBacon implements ProductPrococol {
    private name = 'Sanduiche de Bacon'
    private price = 7.49
        
    getName (): string {
        return this.name
    }

    getPrice(): number {
        return this.price
    }
}