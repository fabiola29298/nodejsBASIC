const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la tarea por hacer'


};
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marcar como completado o pendiente la tarea'

};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado compleatado de una tarea', { descripcion, completado })
    .command('borrar', 'Borrar una tarea', { descripcion })
    .help()
    .argv;


module.exports = {
        argv
    }
    /*
     .command('crear', 'Crear un elemento por hacer', {
          descripcion: {
            alias: 'd',
            demand: true,
            desc:'Descripcion de la tarea por hacer'

        },
        descripcion202: {
            alias: 'd',
            demand: true,
            desc:'Descripcion de la tarea por hacer'

        }
     })
    */