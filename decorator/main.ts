import { SandubaFrango } from "./frango";
import { MussarelaAdicionalDecorator } from "./queijo-adicional-decorator";
import { PepperoniAdicionalDecorator } from "./pepperoni-adicional-decorator";
import { SandubaCarne } from "./carne";
import { SandubaBacon } from "./bacon";

const sandubaFrango = new SandubaFrango ()
const sandubaMussarela = new MussarelaAdicionalDecorator(sandubaFrango)
const sandubaPepperoni = new PepperoniAdicionalDecorator(sandubaFrango)

const sandubaCarne = new SandubaCarne ()
const sandubaBacon = new SandubaBacon ()

console.log (sandubaFrango.getName(), 'custa R$', sandubaFrango.getPrice())
console.log(sandubaMussarela.getName(), 'custa R$', sandubaMussarela.getPrice())
console.log(sandubaPepperoni.getName(), 'custa R$', sandubaPepperoni.getPrice())

console.log()

console.log (sandubaCarne.getName(), 'custa R$', sandubaCarne.getPrice())
console.log (sandubaBacon.getName(), 'custa R$', sandubaBacon.getPrice())