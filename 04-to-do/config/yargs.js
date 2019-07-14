const opts1 = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'Descripcion de la tarea por hacer'

    }
};
const opts2 = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'Descripcion de la tarea por hacer'

    },
    completado: {
        alias: 'c',
        desc: 'Marcar como completado o pendiente la tarea'
    }
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', opts1)
    .command('actualizar', 'Actualiza el estado compleatado de una tarea', opts2)
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