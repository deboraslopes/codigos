const carPrototype = {
    modelo: 'Volcano',
    marca: 'Fiat',
    cor: 'vinho',

    fullCar(){
        return `${this.modelo} ${this.marca} ${this.cor}`

    }
}
const anotherCar = Object.create(carPrototype)
// console.log(anotherCar)
// console.log(anotherCar.marca)
// console.log(anotherCar.fullCar())