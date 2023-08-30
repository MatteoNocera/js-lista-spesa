/* 

Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
Consigli:
Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while
Tutto qua! :faccia_che_festeggia:

*/

// Data una lista della spesa

// 'pomodori', 'mozzarella', 'avocado', 'cipolle', 'carote', 'latte'

const buyList = [];

let insert = true;

let product = '';

let ulElement = document.createElement('ul');

document.querySelector('body').appendChild(ulElement)

let liElement;


//ulElement.innerHTML('La tua lista della spesa è :');
document.querySelector('ul').innerHTML = 'La tua lista della spesa è :'

while (insert) {


    product = prompt('cosa serve in casa?');
    buyList.push(product);
    console.log(product);

    
    let liElement = document.createElement('li');
    
    ulElement.appendChild(liElement);

    liElement.innerHTML = product

    if (confirm('Ti serve altro?') != true) {
        insert = false;
      }

    
}

console.log(buyList);




