const fs = require("fs");

const leer = () => {
    try {
        let citas = fs.readFileSync("./citas.json", "utf-8");
        citas = JSON.parse(citas);
        if (citas.length === 0) {
            console.log("No hay citas agendadas.");
        } else {
            console.log(citas);
        }
    } catch (error) { // Creo el archivo vacío si no existe.
        console.log("Archivo de citas se inicializó.");
        console.log("No hay citas agendadas.");
        fs.writeFileSync("./citas.json", "[]");
    }
};


const registrar = (nombre, edad, animal, color, enfermedad) => {
    let citas = [];
    try {
        citas = fs.readFileSync("./citas.json", "utf-8");
        citas = JSON.parse(citas);
    } catch (error) {
        console.log("Archivo de citas se inicializó.");
    } finally {
        const nuevaCita = {
            nombre: nombre,
            edad: edad,
            animal: animal,
            color: color,
            enfermedad: enfermedad
        };
        citas.push(nuevaCita);
        fs.writeFileSync("./citas.json", JSON.stringify(citas));
        console.log("Cita registrada con éxito.");
    }
};

module.exports = {leer, registrar};