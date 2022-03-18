
// FUNCIONES
const resultado = ( a: number , b: number ): number  =>
{
        return a + b; 
}

console.log(resultado(4,8) )


interface PersonajeLOR
{
    nombre: string;
    ev: number; 
    mostrarHP: () =>  void ; 
}


function  Curar(personaje: PersonajeLOR, puntos: number ): void
{
    personaje.ev  += puntos ; 
    console.log(personaje)
}


const nuevoPersonaje : PersonajeLOR = 
{
  nombre: "JosorioC",
  ev: 30 ,
  mostrarHP()
  {
   console.log("Mostrando puntos de vida: " + this.ev )
  }
}

Curar(nuevoPersonaje, 15); 

nuevoPersonaje.mostrarHP(); 


