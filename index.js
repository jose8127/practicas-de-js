let mesesitos = [
    { mes: "enero", ganancia: 870 },
    { mes: "febrero", ganancia: 1000 },
    { mes: "marzo", ganancia: 1020 },
    { mes: "abril", ganancia: 2300 },
    { mes: "mayo", ganancia: -10 }
];

function agregar(unaLista, elemento) {
    unaLista.push(elemento);
}

function getMeses(array) {
    let meses = [];
    for (let element of array) {
        agregar(meses, element.mes);
    }
    return meses;
}

function afortunados(array) {
    let afortunados = []
    for (let element of array) {
        if (element.ganancia > 1000) {
            agregar(afortunados, element)
        }
    }
    return afortunados;
}

function mesesAfortunados(array) {
    return getMeses(afortunados(array));
}

getMeses(mesesitos);

afortunados(mesesitos);

mesesAfortunados(mesesitos);


function convertirARG_USD(pesos) {
    return pesos / 338;
}

const usds = convertirARG_USD(100000);
console.log(`$100000 son USD ${usds.toFixed(2)}`);
