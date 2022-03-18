class Persona 
{
  constructor(public nombre: string, public direccion: string)
  {

  }
}


class Heroe  extends Persona
{

    constructor(
        public alterEgo : string,
        public edad: number, 
        public nombrereal: string
        )
    {
        super(nombrereal,"New York" )
    }
}

const iroman = new Heroe("Iroman",35,"Tony"); 

console.log(iroman)