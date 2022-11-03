interface Calcular{
    execute(valor1: number, valor2: number): number
}

class Soma implements Calcular{
    execute(valor1:number, valor2: number): number {
        return valor1 + valor2        
    }
}

class Multiplica implements Calcular{
    execute(valor1: number, valor2: number): number {
        return valor1 * valor2
    }
}

class Subtrai implements Calcular{
    execute(valor1: number, valor2: number): number {
        return valor1 - valor2
    }
}

class Calculadora{
    execute(operac: Calcular, valor1: number, valor2: number): number{
        return operac.execute(valor1, valor2)
    }
}

const calculadora = new Calculadora()
console.log (calculadora.execute(new Soma(), 30, 15))
console.log (calculadora.execute(new Multiplica(), 30, 15))
console.log (calculadora.execute(new Subtrai(), 30, 15))
