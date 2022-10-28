import { LancheDecorator } from "./lanche-decorator";

export class MussarelaAdicionalDecorator extends LancheDecorator{
    getName(): string {
        return this.product.getName() + ' com mussarela'
    }

    getPrice(): number {
        return this.product.getPrice() + 2
    }
}