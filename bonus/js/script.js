//Prompt Giorno della settimana
const giornoSettimana = prompt('Oggi che giorno della settimana è?');
console.log(giornoSettimana);

//Prompt Giorno
const giorno = prompt('Che giorno è?');
console.log(giorno);

//Prompt Mese Corrente
const mese = prompt('Che mese è?');
console.log(mese);

//Prompt Anno Corrente
const anno = prompt('E quale anno è?');
console.log(anno);

//Prompt Ora
const ora = prompt('Inserisci Ora');
console.log(ora);

//Prompt Minuto
const minuti = prompt('Inserisci Minuti');
console.log(minuti);


//Inizializzo variabile data odierna
let dataOggi = giorno + mese + anno
console.log = (dataOggi)


//Richiamo 'let' password e Print data odierna
let christmasCountodown = document.getElementById('christmasCountodown');
christmasCountodown.innerHTML = `Oggi è ${giornoSettimana} ${giorno} / ${mese} / ${anno} e sono le ${ora} ${minuti}!`;
console.log = (christmasCountodown);

//Inizializzo giorni per natale
let giorniMancanti = 24 - giorno;
console.log = (giorniMancanti);

//Inizializzo mesi per natale
let mesiMancanti = 12 -  mese;
console.log = (mesiMancanti);

//Inizializzo ore per natale
let oreMancanti = 23 - ora;
console.log = (oreMancanti);

//Inizializzo minuti per natale
let minutiMancanti = 60 -  minuti;
console.log = (minutiMancanti);

//Richiamo 'let' giornimancanti e Print data Natale 
let dataNatale = document.getElementById('dataNatale');
dataNatale.innerHTML = `Mancano solo ${giorniMancanti} giorni ${mesiMancanti} mesi ${oreMancanti} ore e ${minutiMancanti} minuti a Natale! `;
console.log = (dataNatale);