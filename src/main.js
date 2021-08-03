import Impuestos from './impuestos.js';
import Cliente from './cliente.js';

const taxBSpears = new Impuestos(50000000, 15000)
const clientBSpears = new Cliente("Britney Spears", taxBSpears)
const calcTaxBSpears = clientBSpears.calcularImpuesto()

console.log(`Impuesto total a pagar de la cliente ${clientBSpears._name}: $${calcTaxBSpears} dólares`)