const {argv} = require("process")
const {registrar, leer} = require("./operaciones")

argumentos = argv.slice(2)
const [operacion, nombre, edad, animal, color, enfermedad] = argumentos;


(function main() {
    if(operacion === "registrar"){
        registrar(nombre, edad, animal, color, enfermedad)
    } else if(operacion === "leer") { 
        leer()
    } else {
        console.log(`Operación no permitida: ${operacion}.`)
    }
})();