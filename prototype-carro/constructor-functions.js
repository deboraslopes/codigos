function Car (modelo, marca, cor){
    this.modelo = modelo
    this.marca = marca
    this.cor = cor
}
const carPrototype = {
    modelo: 'Volcano',
    marca: 'Fiat',
    cor: 'vinho',

    fullCar(){
        return `${this.modelo} ${this.marca} ${this.cor}`

    }
}

Car.prototype = Object.create(carPrototype) //perde o construtor
Car.prototype.constructor = Car //construtor

//fazer herança
function SubCar(modelo, marca, cor){
    Person.call(this, modelo, marca, cor)
    this.fromSubClass = 'TORO'
}

SubCar.prototype = Object.create(Car.prototype)
SubCar.prototype.constructor = SubCar

