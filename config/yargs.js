const opts = {
    base: {
        // demand , si es true es que es requerido cuando se mande el parametro listar 
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea un archivo de texto con la tabla de multiplicar hasta el limite definido', opts)
    .help()
    .argv;


module.exports = {
    argv
}