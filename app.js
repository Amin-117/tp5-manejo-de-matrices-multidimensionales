let alumnos = [
  ['Juan', [['Matematicas',8], ['Lengua',9]]],
  ['Ana', [['Lengua',9], ['Matematicas',10]]]
];

const prompt = require('prompt-sync')();

// FUNCION PARA BUSCAR ALUMNO
function buscarAlumno(nombre) {
  for (let i = 0; i < alumnos.length; i++) {
    if (alumnos[i][0] === nombre) {
      return i;
    }
  }
  return -1;
}

// VER ALUMNOS
function verAlumnos() {
  for (let i = 0; i < alumnos.length; i++) {
    console.log("Alumno: " + alumnos[i][0]);
    let materias = alumnos[i][1];

    for (let j = 0; j < materias.length; j++) {
      console.log("  " + materias[j][0] + ": " + materias[j][1]);
    }
  }
}

// AGREGAR ALUMNO
function agregarAlumno() {
  let nombre = prompt("Nombre del alumno: ");
  let pos = buscarAlumno(nombre);

  if (pos !== -1) {
    console.log("El alumno ya existe");
    return;
  }

  let materias = [];
  let cantidad = parseInt(prompt("Cuantas materias: "));

  for (let i = 0; i < cantidad; i++) {
    let materia = prompt("Nombre de materia: ");
    let nota = parseInt(prompt("Nota: "));
    materias.push([materia, nota]);
  }

  alumnos.push([nombre, materias]);
}

// AGREGAR O MODIFICAR NOTA
function modificarNotas() {
  let nombre = prompt("Nombre del alumno: ");
  let pos = buscarAlumno(nombre);

  if (pos === -1) {
    console.log("Alumno no encontrado");
    return;
  }

  let materia = prompt("Materia: ");
  let materias = alumnos[pos][1];
  let encontrada = false;

  for (let i = 0; i < materias.length; i++) {
    if (materias[i][0] === materia) {
      let nuevaNota = parseInt(prompt("Nueva nota: "));
      materias[i][1] = nuevaNota;
      encontrada = true;
    }
  }

  if (!encontrada) {
    let nota = parseInt(prompt("Nota: "));
    materias.push([materia, nota]);
  }
}

// MENU
let opcion = 0;

while (opcion !== 4) {
  console.log("\n1. Ver alumnos");
  console.log("2. Agregar alumno");
  console.log("3. Agregar o modificar notas");
  console.log("4. Salir");

  opcion = parseInt(prompt("Opcion: "));

  if (opcion === 1) verAlumnos();
  else if (opcion === 2) agregarAlumno();
  else if (opcion === 3) modificarNotas();
}