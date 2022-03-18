interface Pasajero 
{
    nombre: string; 
    hijos?: string []; 
}

const pasajero1: Pasajero =
{
   nombre: "Jose Osorio"
}

const pasajero2: Pasajero =
{
    nombre: "Mauricio",
    hijos: ["Ana", "Maria", "Pedro"]
}

function imprimirHijos(pasajero: Pasajero) : void 
{
    const cantidadHijos = pasajero.hijos?.length || 0; 
    console.log("La cantidad de hijos que tiene el pasajero es: " + cantidadHijos ); 
}

imprimirHijos(pasajero1); 
imprimirHijos(pasajero2); 