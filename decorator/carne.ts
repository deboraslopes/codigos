import { ProductPrococol } from "./lanche-protocol";

export class SandubaCarne implements ProductPrococol {
    private name = 'Sanduiche de Carne'
    private price = 7.49
        
    getName (): string {
        return this.name
    }

    getPrice(): number {
        return this.price
    }
}