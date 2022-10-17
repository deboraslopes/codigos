/*Aplique o Factory Method para fabricar computadores, usando como base o exemplo visto de static e parametrizado no hipertexto.

Considere que:
- os produtos devem implementar uma interface comum;
- o cliente deve utilizar apenas a fábrica para criar instâncias do tipo abstrato da interface;
- todo computador deve ter, com getters, os atributos: ram, hdd, cpu e type;
- há dois tipos de computadores: pc e server;
- RAM e HD devem estar em GB;
- CPU deve estar em GHz;
- através do tipo informado, a fábrica decide qual tipo de computador irá instanciar;
- quando o método .toString() for aplicado a um computador, ele deve imprimir seus atributos.*/

class computador {
    constructor(ram, hd, cpu, type){
        this.ram = ram;
        this.hd = hd;
        this.cpu = cpu;
        this.type = type;
    }

    static Factory(ram, hd, cpu, type){
        if(type == "pc"){
            return new pc(ram, hd, cpu, type);
        }
        if(type == "server"){
            return new Server(ram, hd, cpu, type);
        }
    }

    get getRam () {
        return this.ram;
    }

    setRam (ram) {
        this.ram = ram;
    }

    get getHd () {
        return this.hd;
    }

    setHdd (hd) {
        this.hd = hd;
    }

    get getCpu () {
        return this.cpu;
    }

    setCpu (cpu) {
        this.cpu = cpu;
    }

    get getType () {
        return this.type;
    }

    setType (type) {
        this.type = type;
    }

    toString (){
        console.log(this.ram, this.hd, this.cpu, this.type);
    }
}

class Pc extends computador {

}

class Server extends computador {

}

function run(){
    let pc = computador.Factory(10, 10, 4000, "Pc");
    let server = computador.Factory(10, 10, 4000, "Server");

    console.assert(pc instanceof Pc);
    console.assert(server instanceof Server);
    pc.setHd(100)
    server.setHd(200)
    pc.toString()
    server.toString()
}

run()