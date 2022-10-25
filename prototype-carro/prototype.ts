export interface Prototype{
    clone(): Prototype
}

export class Car implements Prototype {
    constructor (public modelo: string, public marca: string, public cor: string){}

    clone1(): this {
        const newCar = Object.create(this)
        return newCar
    }

    clone2(): this {
        const newCarFull = Object.create(this.marca, this.modelo, this.cor, this.numeroRodas)
        this.numeroRodas = numeroRodas
        return newCarFull
    }
}
