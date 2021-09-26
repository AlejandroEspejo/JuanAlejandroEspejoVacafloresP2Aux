//PREGUNTA 1:
//Supongamos que estamos creando una aplicación de apuestas de fútbol.
//Los datos los obtenemos de un servicio web, los cuales son los siguientes:
const game = {
team1: 'Bayern Munich',
team2: 'Borrussia Dortmund',
players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
};

 //1. Cree un array de jugadores para cada equipo (nombre a las variables como 'players1' y 'players2')
console.log("TAREA 1");
let players1= game.players[0];
let players2= game.players[1];
console.log("team 1: "+players1);
console.log("team 2: "+players2);


//2. El primer jugador en cualquier conjunto de jugadores es el portero y los demás 
//son jugadores de campo. Para el Bayern de Múnich (team 1) cree una variable 
//'gk' con el nombre del portero y un array 'fieldPlayers' con los 10 restantes
//jugadores de campo
console.log("TAREA 2");
let gk;
gk = game.players[0][0];
let fieldplayers= [];
for (let i = 1; i < game.players[1].length; i++) {
    fieldplayers.push(game.players[0][i]);
}
console.log("Portero: "+gk);
console.log("Jugadores: "+fieldplayers);


//3. Cree una matriz 'allPlayers' que contenga a todos los jugadores de ambos 
//equipos (22 jugadores)
console.log("TAREA 3");
let allplayers = game.players[0].concat(game.players[1]);
console.log(allplayers);


//4. Durante el partido, el Bayern de Múnich (team 1) utilizó 3 jugadores suplentes. 
//Así que crea un nuevo array ('players1Final') que contiene todos los jugadores 
//originales del equipo1 más 'Thiago', 'Coutinho' y 'Perisic'

console.log("TAREA 4");
let suplentes = ['Thiago', 'Coutinho', 'Perisic']
let players1Final= game.players[0].concat(suplentes);
console.log(players1Final);


//5. Basado en el objeto game.odds, cree una variable para cada cuota (llamada
//    'team1', 'draw' y 'team2')
    

console.log("TAREA 5");
let team1= game.odds.team1;
let draw= game.odds.x;
let team2= game.odds.team2;

console.log("team 1 : "+team1);
console.log("draw: "+draw);
console.log("team 3 : "+team2);


//6. Cree una función ('printGoals') que reciba un número arbitrario de nombres de 
//jugadores (no un array) e imprime cada uno de ellos en la consola, junto con el
//número de goles que marco cada uno (pasar como argumento solo nombres de 
//jugadores que hayan marcado al menos un gol, revise los datos del objeto ‘game’ 
//para encontrar la información que le sirva).
console.log("TAREA 6");
function printGoals(...numarbitrario) {
    let goles= 0;
    let b= true;
    for (let i = 0; i < numarbitrario.length; i++) {
        for (let j=0; j<i; j++) {
            if (numarbitrario[i] == numarbitrario[j]) {
                b = false;
                j=i;
            }
        }
        if (b) {
            for (let k = i; k < numarbitrario.length; k++) {
                if (numarbitrario[i] == numarbitrario[k]) {
                    goles++;
                }
            }
            console.log(numarbitrario[i] + " tiene: " + goles + " goles");
        }
        goles = 0;
        b= true;
    }
}
printGoals(...game.scored);


//7. En las aplicaciones de apuestas es más probable que gane el equipo con la 
//cuota más baja. Imprima en la consola que equipo es más probable que gane, 
//sin usar una declaración if/else o el operador ternario.

console.log("TAREA 7");
let variable = [
    {
        team1: game.team1,
        cuota: game.odds.team1
    },
    {
        team2: game.team2,
        cuota: game.odds.team2
    }
]
let menorcuota=Math.min(variable [0].cuota, variable [1].cuota);
let res = variable.filter(variable => variable.cuota == menorcuota);

console.log(res);

//8. Use un bucle para poder calcular la cuota (odd) promedio y mostrarlo en la 
//consola
console.log("TAREA 8");
let sumatoria= 0;
let contador = 0;
for (let i in game.odds){
  sumatoria = sumatoria + game.odds[i];
  contador++;
}
let promedio=sumatoria/contador;
console.log(promedio);
//9. Cree una función que devuelva un objeto que contenga los nombres de los 
//jugadores que anotaron goles, pero como PROPIEDADES, y el número de goles 
//como VALORES. Por ejemplo, con los datos obtenidos arriba el objeto se verá 
//como:
//{
//Gnarby: 1,
//Hummels: 1,
//Lewandowski: 2
//}
console.log("TAREA 9");

//10. Tome en cuenta los siguientes datos:
const gameEvents = new Map([
    [17, 'GOAL'],
    [36, 'Substitution'],
    [47, 'GOAL'],
    [61, 'Substitution'],
    [64, 'Yellow card'],
    [69, 'Red card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'GOAL'],
    [80, 'GOAL'],
    [92, 'Yellow card'],
]);
//- Cree una funcion que analice los datos y muestre en la consola un mensaje como 
//este: “Un evento ocurrió, en promedio, cada 9 minutos”
//- Recorra la variable “gameEvents” y muestre cada elemento en la consola 
//señalando si fue el primer o el segundo tiempo, algo como esto: 
//“[PRIMER TIEMPO] 17: GOAL”
console.log("TAREA 10");