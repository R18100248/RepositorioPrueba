const frases = 
[
    "La mejor manera de predecir tu futuro es crearlo.",
    "El lógico te llevará de A a B. La imaginación te llevará a todas partes.",
    "La diferencia entre lo que hacemos y lo que podemos hacer sería suficiente para resolver la mayoría de los problemas del mundo.",
    "Haz lo que sientas en tu corazón para estar bien, porque de todos modos serás criticado de cualquier forma. Serás condenado si lo haces, y condenado si no lo haces.",
    "Tu trabajo va a llenar una gran parte de tu vida, y la única manera de estar satisfecho es hacer lo que crees que es un gran trabajo. Y la única manera de hacer un gran trabajo es amar lo que haces.",
    "Si tu quieres suceder, debes encontrar nuevos caminos en lugar de recorrer los caminos desgastados del éxito aceptado.",
    "El gran secreto en la vida es que no hay un gran secreto. Cualquiera que sea tu objetivo, puedes llegar allí si estás dispuesto a trabajar.",
    "Absorbe lo que es útil, ignore lo que es inútil.",
]
/*Exportar una funcion que regresa una frase*/

function obtieneFrase(max)
{
    let indice = Math.floor(Math.random() * max);
    return frases[indice];
}

console.log(obtieneFrase(7));

//console.log(module);
//module.exports.obtieneFrase.obtieneFrase();