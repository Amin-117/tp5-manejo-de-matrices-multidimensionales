alumnos = [
    ['Juan', [['Matematicas',8], ['Lengua',9]]],
    ['Ana', [['Lengua',9], ['Matematicas',10]]]
]

# BUSCAR ALUMNO
def buscar_alumno(nombre):
    for i in range(len(alumnos)):
        if alumnos[i][0] == nombre:
            return i
    return -1

# VER ALUMNOS
def ver_alumnos():
    for alumno in alumnos:
        print("Alumno:", alumno[0])
        for materia in alumno[1]:
            print(" ", materia[0], ":", materia[1])

# AGREGAR ALUMNO
def agregar_alumno():
    nombre = input("Nombre del alumno: ")
    pos = buscar_alumno(nombre)

    if pos != -1:
        print("El alumno ya existe")
        return

    materias = []
    cantidad = int(input("Cuantas materias: "))

    for i in range(cantidad):
        materia = input("Materia: ")
        nota = int(input("Nota: "))
        materias.append([materia, nota])

    alumnos.append([nombre, materias])

# MODIFICAR NOTAS
def modificar_notas():
    nombre = input("Nombre del alumno: ")
    pos = buscar_alumno(nombre)

    if pos == -1:
        print("Alumno no encontrado")
        return

    materia = input("Materia: ")
    materias = alumnos[pos][1]
    encontrada = False

    for m in materias:
        if m[0] == materia:
            nueva = int(input("Nueva nota: "))
            m[1] = nueva
            encontrada = True

    if not encontrada:
        nota = int(input("Nota: "))
        materias.append([materia, nota])

# MENU
opcion = 0

while opcion != 4:
    print("\n1. Ver alumnos")
    print("2. Agregar alumno")
    print("3. Agregar o modificar notas")
    print("4. Salir")

    opcion = int(input("Opcion: "))

    if opcion == 1:
        ver_alumnos()
    elif opcion == 2:
        agregar_alumno()
    elif opcion == 3:
        modificar_notas()