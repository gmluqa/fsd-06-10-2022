// Se propone generar una funcion que usando REST, le pasamos varios argumentos
// correspondientes a las habilidades de un luchador o luchadora, y posteriormente las mostrarĂ¡ por console.log ,
// a cada habilidad le sumarĂ¡ un valor random del 1 al 10.


const Agrupar = (...argumentos) => {
    let random = parseInt((Math.random() * 10))

    let nuevoArgumentos = argumentos.map(argumentos => argumentos + random)
    console.log(nuevoArgumentos)
}

Agrupar('hadouken ', 'sonic boom ', 'BOOM ')