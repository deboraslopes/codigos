 import { PatoDemo } from "./pato-demo"
 import { GalinhaDemo } from "./galinha-demo"
 import { PatoAdapter } from "./pato-adapter"
 
 let pato = new PatoDemo()
 let galinha = new GalinhaDemo()

 let patoadapter = new PatoAdapter (galinha)
 patoadapter.fazerQuaQua()
 patoadapter.voarPato()
