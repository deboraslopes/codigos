import { Galinha } from "./galinha";
import { Pato } from "./pato";
import { PatoAdaptado } from "./pato-adaptador";

const adaptee : Galinha = new Galinha()
const adapter : PatoAdaptado = new PatoAdaptado(adaptee)
const target : Pato = new Pato(adapter)

target.fazerQuaQua()
target.voarPato()