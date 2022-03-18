export interface Producto 
{
    desc: string; 
    precio: number; 
}

const telefono: Producto = 
{
  desc: "Xiaomi redmi 9C",
  precio: 100
} 

const portatil: Producto = 
{
  desc: "Portatil Lenovo 101",
  precio: 250
} 

export function CalculaISV(productos: Producto[]): [number,number]
{
   let total = 0; 

   productos.forEach(({precio}) => 
   {
      total += precio; 
   }); 

   return [ total, total * 0.15] ; 
}

const articulos = [telefono, portatil]; 


/*
const [total, precioISV] = CalculaISV(articulos); 
console.log("el impuesto sobre ventas de todos los productos es: "
 + precioISV + " y el total es: " + total ); 
 */ 