
let nS = 0; 
//Al definirla afuera, eliminamos el return interno e invocamos a la funcion
let attempts = 0;
let listNG = []; //lista numeros generados
let nM = 10;

function aTE(elemento, texto) //asignarTextoElemento
{
    let eHTML = document.querySelector(elemento);
    // e = elemento,extraemos un elemento 'x' deseado 
    eHTML.innerHTML = texto;
    //se reemplaza el elemento extraído por un texto 'y'
    return; 
}

function VI() //comparamos nU con nS, es decir; verificamos el intento
{ 
    let nU = parseInt(document.getElementById('VU').value); 
    // forzamos la variable UV como un Int
    //console.log(nU); //Visualizar el numero del usuario
    //console.log(nU === nS); //Booleano // se registran los valores en la consola para analisis, no es necesario.


    if(nU === nS)
    {
        aTE('p',`¡Acertaste el número en: ${attempts} ${(attempts == 1) ? 'intento!' : 'intentos!'}`);

        //ahora habilitamos el boton de reiniciar una vez gana el usuario
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else 
        {
            if(nU > nS)
            {
                aTE('p', 'El número secreto es menor');
            }
            else 
                {
                aTE('p','El número secreto es mayor');
                }
        }
        attempts++;
        //console.log(attempts); //Visualizar los intentos en la consola
        clearB(); 
    return;
}

function clearB() //limpiamos la caja de intentos con cada intento
{
   //let Box = document.querySelector('#VU'); //identificamos VU por su id
   //Box.value = ''; //limpiamos VU después de su extracción

   //Podemos ahorrarnos el renglón adicional fusionando ambas operaciones:
   let Box = document.querySelector('#VU').value = '';
}

function gNS() //generador de numero secreto
{
    //let nS = Math.random(Math.random()*10)+1; 
    //return nS; //Aqui nos regresa el numero secreto aleatorio
    let nG = Math.floor(Math.random()*nM)+1; 
    //Al tener nS afuera simplemente tenemos que regresar la funcion para el numero secreto
    console.log(nG); //visualizar el numero generado
    console.log(listNG);

    if(listNG.length == nM)
    {
        aTE('p','Has adivinado todos los numeros posibles.')
    } else 
        {
            if(listNG.includes(nG))
                {
                return gNS(); 
                //Si genera un numero que YA esta en la lista, la función se llama a si misma para 
                //generar un nuevo numero; esto hasta que salga uno que NO esté en la lista.
        
                //Recursividad = cuando una funcion se llama a si misma.
                } 
                else //Si no existe en la lista, se agrega mediante el uso de .push
                    {
                    listNG.push(nG);
                    return nG;
                    }
        }
}

function conIn() //Condiciones iniciales
{
    aTE('h1','Juego del numero secreto'); //Cambiamos h1 por el titulo deseado
    aTE('p',`Introduce un número del 1 al ${nM}`); //Cambiamos el texto dependiendo el evento
    nS = gNS(); // no se tiene que declarar de nuevo, se vuelve a generar
    attempts = 1; //Se resetea el contador de intentos
    console.log(nS);
}

function RJ() // Resteamos el juego con las condiciones iniciales y limpiamos
{
    clearB();  //Limpiamos la caja
    conIn(); // Se reemplaza todos los mensajes de nuevo
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

conIn(); //Llamamos las condiciones iniciales al iniciar el juego