const argv = require('./config/yargs').argv;
var colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./mutliplicar/multiplicar');
let comando = argv._[0];
console.log(argv);


switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);

        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)

        .then(archivo => console.log(`Achivo creado: `, colors.green(`${archivo}`)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('default');

}
//let parametro = argv[2];
//let base = parametro.split('=')[1];

/*

*/