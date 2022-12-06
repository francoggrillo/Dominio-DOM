alert("hiiii every bodyyy")
    console.log("yes word im francogg")
/*llamar elementos del html al js y mas abajo el 
ineer permite modificar el texto DE UN HTML
luego si queres saber un atributo o modificarlo podemos usar get o set atribute*/
    const h1=document.getElementById("chichilo");
    prompt(h1);
    
    h1.innerHTML="sape <br> sape <br>";
    console.log(h1.getAttribute("chichilo"));
    h1.setAttribute("class","indonesia");
const h2=document.getElementById("sabe");
const h3=document.createElement("opaaa");
h2.innerHTML=h3;