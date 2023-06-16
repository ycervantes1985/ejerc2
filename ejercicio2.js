//* ====== EJERCICIO 2 ======

const alumnosRegulares = ["Pablo", "Jorge", "Laura", "Francisco", "Carla"];
const alumnosEgresados = [];

//* Contamos con 2 (dos) arreglos, un listado con alumnos regulares y otro listado con alumnos egresados.

//* CONSIGNA: Crear una función que reciba 3 (tres) parámetros, un arreglo con el listado de alumnos regulares,
//* otro arreglo con el listado de alumnos egresados, y un tercer parámetro indicando el nombre del alumno que desea
//* pasar de "regular" a "egresado". La función debe devolver el listado de alumnos egresados.
//* Nota: El primero que egresa debe ser el primero de la lista "alumnosEgresados"
//* En caso de no contar con mas alumnos regulares devolver un objeto con el siguiente formato:
//* {
//*   ok: false,
//*   msg: 'Ya no existen mas alumnos regulares'
//* }

//* En caso de que el alumno pasado como argumento no se encuentre, devolver false.


function pasarAlumnoAEgresado(alumnosRegulares, alumnosEgresados, nombreAlumno) {
    if (alumnosRegulares.length === 0) {
      return {
        ok: false,
        msg: 'Ya no existen más alumnos regulares'
      };
    }
    
    const indiceAlumno = alumnosRegulares.findIndex(alumno => alumno === nombreAlumno);
    
    if (indiceAlumno === -1) {
        return false;
    }
    
    const alumnoEgresado = alumnosRegulares.splice(indiceAlumno, 1)[0];
    alumnosEgresados.unshift(alumnoEgresado);    
    return alumnosEgresados;
}


  const resultado = pasarAlumnoAEgresado(alumnosRegulares, alumnosEgresados, 'Pablo');
  const resultado1 = pasarAlumnoAEgresado(alumnosRegulares, alumnosEgresados, 'Jorge');
  const resultado3 = pasarAlumnoAEgresado(alumnosRegulares, alumnosEgresados, 'Laura');
  const resultado2 = pasarAlumnoAEgresado(alumnosRegulares, alumnosEgresados, 'Francisco');
  const resultado4 = pasarAlumnoAEgresado(alumnosRegulares, alumnosEgresados, 'Javier');
  
 
  console.log(alumnosRegulares); 
  console.log(alumnosEgresados); 
  