// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos=[];
let numeroMaximo= 10;
let contador=1;


     
    


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo () {

          
    let nombreAmigo = (document.getElementById('amigo').value);
    
    if (nombreAmigo == "") {
        alert("nombre no Valido ");
    }
    else
        { 
        console.log(nombreAmigo);
    
     
        if (listaDeAmigos.length == numeroMaximo) {
              alert("! Alcanzo el numero maximo de amigos !");
        } else {
        
             if (listaDeAmigos.includes(nombreAmigo)) {
                alert(" ! Nombre ya ingresado ¡");
                return;
            } else {
                listaDeAmigos.push(nombreAmigo);
            
                console.log("numero de amigos incluidos: " + contador);
                console.log("lista: " + listaDeAmigos);
                contador++;
                limpiaLista();
                MuestraAmigos();    
            
                return ;
            }    
        }

    }
}



function MuestraAmigos() {

  const listaAmigos = document.getElementById("listaAmigos");

        
        listaDeAmigos.forEach(nombre => {
            const li = document.createElement("li");
            li.textContent = nombre;
            listaAmigos.appendChild(li);
           
        });
}
function limpiaLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML="";
    
}

function sortearAmigo(){
    let totAmigos = listaDeAmigos.length
    let elegido =  parseInt(Math.floor(Math.random()*totAmigos)+1);
    console.log(elegido);
    console.log(listaDeAmigos[elegido]);
    limpiaLista();
    const resultado = document.getElementById("resultado");
    const li = document.createElement("li");
    li.textContent = listaDeAmigos[elegido - 1]
    resultado.appendChild(li);
    //listaDeAmigos.length=0;
    //contador=1;
   
    listaDeAmigos.splice(elegido - 1, 1); 

    console.log(listaDeAmigos); 

    //const nombreAmigo = document.getElementById("amigo");
    //nombreAmigo.value ="";
}

    

