
// Desestructuracion de objetos 

interface Reproductor
{
    volumen: number, 
    segundo: number, 
    cancion: string, 
    detalle: Detalle
}


interface Detalle 
{
    autor: string, 
    anio: number
}


const reproductor: Reproductor = 
{
  volumen: 50,
  segundo: 36, 
  cancion: "Podemos volar", 
  detalle: 
  {
      autor: "Juan Luis Guerra", 
      anio: 2018
  }
}

// Desestructurando:  

const {volumen, segundo,cancion, detalle} = reproductor; 
const {autor, anio} = detalle; 


//console.log("el volumne actual es: " + volumen); 
//console.log("el segundo actual es: " + segundo); 
//console.log("la cancion actual es de: " + cancion); 
//console.log("el autor de la cancion actual es: " + autor ); 

// Desestructuracion de arreglos 

const DragonBallZ = ["Goku", "Vegueta" , "Frizzer"]; 

// desestructurando

const [,,p3] = DragonBallZ; 
