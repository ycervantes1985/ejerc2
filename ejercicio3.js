//* ====== EJERCICIO 3 ======

const numeros = [19,"a", 12, 6, -31, 45, 50, -27, 1, 9, 99, 11];

//* CONSIGNA: Contamos con un listado de números y se solicita crear una función que reciba como parámetro un arreglo de numeros
//* y devuelva el valor mínimo del arreglo.
//* Si el arreglo cuenta con algun valor que no sea un número, devolver false, de lo contrario devolver el valor mínimo.
//* NOTA: No se puede hacer uso de la clase Math y su método min().


function valorMinimo(array) {
    let minimo = array[0];
    for (let i = 1; i < array.length; i++) {
        if(typeof array[i] === 'number'){
            if (array[i] < minimo) {
                minimo = array[i];
                }
        }
        else{
            return false
        }
        
    }
    
    return minimo;
}


console.log(valorMinimo(numeros))


