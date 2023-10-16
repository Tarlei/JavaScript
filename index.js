import{cliente} from "./Cliente.js";
import{contaCorrente} from "./ContaCorrente.js";


const cliente1 = new cliente(`Ricardo`,11122233344); 
const cliente2 = new cliente(`Alice`,55522233344);
const contaCorrenteRicardo = new contaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);
const conta2 = new contaCorrente (102, cliente1);

let valor = 200;
contaCorrenteRicardo.transferencia(valor, conta2);

console.log(contaCorrenteRicardo);
console.log(conta2);
console.log(contaCorrente.numeroDeContas);