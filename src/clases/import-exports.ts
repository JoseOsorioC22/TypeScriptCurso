import { CalculaISV, Producto } from "./06 - Desestructuracion-Funciones";


const carritoDeCompras: Producto[] = [
{
    desc: "Celular redmi",
    precio:80
}
,
{
    desc: "Jeans Polo", 
    precio: 20
}

]; 


const [total,totalISV] = CalculaISV(carritoDeCompras); 

console.log("el total es: " + total + " y el total ISV es: " + totalISV); 
