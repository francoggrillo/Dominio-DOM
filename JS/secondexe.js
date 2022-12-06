const a= document.querySelector('#unoinput');
const   b= document.getElementById("dosinput");
const c= document.querySelector("#calcular");
const d= document.querySelector("#fgg");

c.addEventListener("keydown",hi);

function hi(){const res= parseInt(b.value)+ parseInt(a.value);
d.innerText= "tu resultado es :"+ res };

/* ANOTACIONES MUY IMPORTANTES , ETIQUETA SCRPIT AL FINAL DEL BODY ALWAYS
ADDEVENTLISTENER SE PONE PRIMERO LA ACCION QUE ESTAMOS ESCUCHANDO Y DESPUES LO QUE TIENE QUE HACER*/
