
/*Esto es un objeto de js se pone corchetes y comas ,,, para traer la info se pone el nombre del objeto . atributo*/
var myCar ={
    marca:"VW",
    modelo:"Golf",
    motor:1.4,}
undefined
myCar
{marca: 'VW', modelo: 'Golf', motor: 1.4}
myCar.modelo
'Golf'
myCar.motor
1.4

/*tambien puedo poner funciones para traer todo mas rapido de la misma manera y luego invocandola
 el this( usa como referencia de su padre osea el objeto que seria mycar ) se utiliza para llamar al atributo */
var myCar ={
    marca:"VW",
    modelo:"Golf",
    motor:1.4,
    descripcion: function() {console.log(this.marca+"-->" +this.modelo)}

}

undefined
myCar.descripcion()
VM3922:5 VW-->Golf ( solo traje dos ) 

/*funcion contructora de objetos se hace d ela siguente manera la estructura 
llamas la funcion pones los parametros primero , le pones this y listo , despues pones new la funcion y completas parametros*/
function autoNuevo(marca,modelo,motor)
    { this.marca=marca,
      this.modelo=modelo,
      this.motot=motor};

undefined
var autoA= new autoNuevo("Ford","Mustang","V8")
undefined
autoA
autoNuevo {marca: 'Ford', modelo: 'Mustang', motot: 'V8'}
var autoB= new autoNuevo("RangerRover","ren","v10")
undefined