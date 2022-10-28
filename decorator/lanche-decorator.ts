import { ProductPrococol } from "./lanche-protocol";

export class LancheDecorator implements ProductPrococol {
    constructor (protected product: ProductPrococol){}

    getName (): string {
        return this.product.getName()
    }

    getPrice(): number {
        return this.product.getPrice()
    }
}