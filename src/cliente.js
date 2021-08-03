export default class Cliente {
    constructor(name, tax){
        this._name = name
        this._tax = tax
    }
    get name() {
        return _name
    }
    set name(newName){
        this._name = newName
    };
    
    calcularImpuesto(){
        return (this._tax._monto_bruto_anual - this._tax.deducciones) * 0.21;
    }
}