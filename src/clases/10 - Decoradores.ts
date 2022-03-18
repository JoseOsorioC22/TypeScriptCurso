
function reportableClassDecorator<T extends
 { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }
   



@reportableClassDecorator
class MiSuperClase 
{
    public MiPropiedad: string = "ABCD"; 

    imprimir()
    {
        console.log(this.MiPropiedad); 
    }

}

console.log(MiSuperClase)
const MiClase = new MiSuperClase();
console.log("**** " + MiClase.MiPropiedad + " ****")