//* ====== EJERCICIO 1 ======

const numeros = [5, 12, 91, 25, 5, 63, 89, 25, 101, 47, 91, 63];

//* Contamos con un listado de números en los cuales puede haber o no repetidos.

//* CONSIGNA: Crear una función que reciba como parámetro un arreglo de números y devuelva
//* un arreglo con los números pero quitando los repetidos.
//* NOTA: No se puede usar el objeto Set.


function eliminarR(array) {
  const arregloSRepetidos = [];
  
  array.forEach(valor => {
    if (!arregloSRepetidos.includes(valor)) {
      arregloSRepetidos.push(valor);
    }
  });
  
  return arregloSRepetidos;
}
console.log(eliminarR(numeros))