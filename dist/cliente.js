"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cliente = /*#__PURE__*/function () {
  function Cliente(name, tax) {
    _classCallCheck(this, Cliente);

    this._name = name;
    this._tax = tax;
  }

  _createClass(Cliente, [{
    key: "name",
    get: function get() {
      return _name;
    },
    set: function set(newName) {
      this._name = newName;
    }
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      return (this._tax._monto_bruto_anual - this._tax.deducciones) * 0.21;
    }
  }]);

  return Cliente;
}();

exports["default"] = Cliente;