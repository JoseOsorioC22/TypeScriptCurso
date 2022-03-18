function queTipoSoy <T> (argumento: T)
{
    return  argumento; 
}

console.log("Le estoy pasando un nombre (string): " + queTipoSoy("Jose Osorio"))
console.log("Le estoy pasando un numero (number): " + queTipoSoy(78)); 
console.log("Le estoy pasando un array: " + queTipoSoy([1,2,3,4,5])); 
