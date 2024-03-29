const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./to-do/to-do');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        porHacer.getListado();
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('====== Por Hacer ========'.green);
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('========================='.green);
        }


        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Default');
        break;
}