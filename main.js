
/* Platzi FB 
function aleatorio(min,max)
{
    var number = Math.floor( Math.random) * ( max - min + 1 ) + min;
    return number;
}

var piedra = 0;
var papel = 1;
var tijera = 2;

var options =[ "Piedra", "Papel", "Tijera"];

var userOption;
var machineOption = aleatorio(0,2);
userOption = prompt ('Cual es tu eleccion?\n Piedra:0\n Papel:1\n Tijera:2', 0);
alert ("Elegiste " +  options[userOption]);
alert ("Javascript eligio " + options[machineOption]);

if (userOption == piedra){
    if (machineOption= piedra){
        alert('es empate');
    }
    else if (machineOption= papel){
        alert('perdiste');
    }
    else if (machineOption=tijera){
        alert ('ganaste');
    }
}
else if (userOption == papel){
    if (machineOption= piedra){
        alert('ganaste');
    }
    else if (machineOption= papel){
        alert('empate');
    }
    else if (machineOption=tijera){
        alert ('perdiste');
    }
}
else if (userOption == tijera){
    if (machineOption= piedra){
        alert('perdiste');
    }
    else if (machineOption= papel){
        alert('ganaste');
    }
    else if (machineOption=tijera){
        alert ('empate');
    }
} */

/* function aleatorio(min,max)
{
    var number = Math.floor( Math.random) * ( max - min + 1 ) + min;
    return number;
}
var player= prompt ('Cual es tu eleccion?\n Piedra:0\n Papel:1\n Tijera:2', 0);
var machine = aleatorio(0,2);;

var rock = 0;
var paper = 1;
var scissors = 2;

var options =[ 'rock', 'paper', 'scissors']; */

var player;
var machine;

function game(player,machine){
if (player=== machine){
    console.log('it is a tie');
}
else if ( player==='rock'&& machine==='paper' || player ==='paper' && machine==='scissors'|| player ==='scissors'&&machine==='rock'){
    console.log('Machine won');
}
else if (player==='rock'&& machine==='scissors' || player ==='paper' && machine==='rock'|| player ==='scissors'&&machine==='paper'){
    console.log('Player won');
}
else{
    console.log('Enter a valid option');
}
}

game(player,machine);

/* let x = 10;

//promesas necesitan 2 parametros:resolve y reject
const p = new Promise((resolve, reject) => {
    if (x==10){
        resolve('La variable es igual a 10');
    }else{
        reject ('La variable NO es igual a 10')
    }
});

p.then (res=>{
    console.log('sucess:'+ res);
}) */