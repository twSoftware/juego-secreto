let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

/*Las siguiente lineas de codigo se reemplazaron por la función "asignarTextoElemento"
let titulo=document.querySelector(elemento);
titulo.innerHTML = texto;

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10';*/

function asignarTextoElemento(elemento, texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){

    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); 
    /*
    console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto))
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario === numeroSecreto);
    */
    //console.log(intentos);
    if (numeroDeUsuario===numeroSecreto){
        asignarTextoElemento ('p',`Acertaste el número en ${intentos} ${(intentos===1) ? 'intento.' : 'intentos.'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);

    //Si ya sorteamos todos los números. 
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles.');
    }
    else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Fuego del numero secreto');
    asignarTextoElemento('p',`indica un numero del 1 al ${numeroMaximo}`);
    
    //Generar numero aleatorio. 
    numeroSecreto = generarNumeroSecreto();
    //Inicializar el numero de intentos.
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar caja. 
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego.   
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();