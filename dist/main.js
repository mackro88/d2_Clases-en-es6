"use strict";

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

var _cliente = _interopRequireDefault(require("./cliente.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var taxBSpears = new _impuestos["default"](50000000, 15000);
var clientBSpears = new _cliente["default"]("Britney Spears", taxBSpears);
var calcTaxBSpears = clientBSpears.calcularImpuesto();
console.log("Impuesto total a pagar de la cliente ".concat(clientBSpears._name, ": $").concat(calcTaxBSpears, " d\xF3lares"));