//Prompt nome
const userName = prompt('Inserisci il tuo nome');
console.log(userName);

//Prompt cognome
const userSurname = prompt('Inserisci il tuo cognome');
console.log(userSurname);

//Prompt colore pref.
const prefCol = prompt('Inserisci il tuo colore preferito');
console.log(prefCol);

//Inizializzo variabile password
let password = userName + userSurname + prefCol
console.log = (password)


//Richiamo 'let' password e Print della pass
let passwordgen = document.getElementById('passwordgen');
passwordgen.innerHTML = `La tua password è ${userName}${userSurname}${prefCol}`;
console.log = (passwordgen);