import { PatoDemo } from "./pato-demo"

export class Pato{
    private readonly patodemo: PatoDemo

    constructor (patodemo : PatoDemo){
        this.patodemo = patodemo
    }
    fazerQuaQua(): void{
        this.patodemo.fazerQuaQua
    }

    voarPato(): void{
        this.patodemo.voarPato
    }
}