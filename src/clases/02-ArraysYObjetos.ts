// VIDEO TUTORIAL 2 - ARRAYS Y OBJETOS Y DATOS OPCIONALES 
let habilidades: string [] =   ["Rapidez", "Inteligencia", "Disciplina"] ; 

interface Personaje 
{
  nombre: string; 
  edad: number; 
  soltero: boolean; 
  habilidades: string[], 
  puebloNatal?: string
}

const persona: Personaje  =
{
    nombre: "Jose", 
    edad: 25, 
    soltero: true,
    habilidades: habilidades
}; 

persona.puebloNatal = "San Juan Nepomuceno"; 



//console.table(persona)
