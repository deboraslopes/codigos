import { LancheDecorator } from "./lanche-decorator";

export class PepperoniAdicionalDecorator extends LancheDecorator{
    getName(): string {
        return this.product.getName() + ' com pepperoni'
    }

    getPrice(): number {
        return this.product.getPrice() + 0.99
    }
}