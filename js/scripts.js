const name = prompt('Inserisci il tuo nome');
console.log(name);

const surname = prompt('Inserisci il tuo cognome');
console.log(surname);

const favcolor = prompt('Inserisci il tuo colore preferito');
console.log(favcolor);

document.getElementById('password').innerHTML = 'La tua password è ' + name + surname + favcolor + '130';