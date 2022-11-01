import { Galinha } from "./galinha";

export class PatoAdaptado{
    private readonly galinha : Galinha

    constructor (galinha : Galinha){
        this.galinha = galinha
    }

    private adaptPato (pato : string) : any{
        switch (pato){
            case 'Qua Qua':
                return 'Voa Galinha'
            case 'voarPato()':
                return 'Voa Galinha'
            default:
                throw new Error("Não é Pato nem Galinha");
        }
    }
}