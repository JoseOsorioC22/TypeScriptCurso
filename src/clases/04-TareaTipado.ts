interface SuperHeroe
{
    nombre: string,
    edad: number,
    direccion: Direccion , 
    mostrarDireccion: () => string
}

interface Direccion 
{
    calle: string, 
    ciudad: string, 
    pais: string
}


const superHeroe: SuperHeroe  = 
{
    nombre: "SpiderMan",
    edad: 30,
    direccion: 
    {
        calle: "Apple Strett",
        ciudad: "New York",
        pais: "USA"
    }, 
    mostrarDireccion()
    {
       return "la direccion de " + this.nombre +  " es: " + this.direccion.calle +  
        " - " + this.direccion.ciudad; 
    }
}

console.log(superHeroe.mostrarDireccion()); 


