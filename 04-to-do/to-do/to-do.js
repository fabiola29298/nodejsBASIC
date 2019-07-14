const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo grabar');

    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch {
        listadoPorHacer = [];
    }


}




// primera funcion
const crear = (descripcion) => {
        cargarDB();

        let porHacer = {
            descripcion,
            completado: false
        };

        listadoPorHacer.push(porHacer);
        guardarDB();
        return porHacer;

    }
    //segunda funcion
const getListado = () => {
    cargarDB();
    return listadoPorHacer;




}

module.exports = {
    crear,
    getListado
}