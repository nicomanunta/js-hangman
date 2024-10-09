let words = ['yogurt', 'madre', 'cestino', 'negozio', 'marciapiede', 'chiocciola', 'orso', 'nuvola', 'uccello', 'uova', 'capra', 'ferita', 'denaro', 'sotto', 'amico', 'spiaggia', 'ragno', 'soldato', 'ghiaccio', 'girasole', 'marrone', 'pala', 'rosa', 'cucitrice', 'colori', 'fiume', 'soldato', 'pantofole', 'sette', 'capelli', 'sole', 'sei', 'testa', 'gomma', 'gonna', 'piedi', 'stivale', 'puzzle', 'calzini', 'pesce',, 'saltare', 'carne', 'nuvola', 'grazie', 'dito', 'vestito', 'orso', 'gesso', 'automobile', 'quadrato', 'zia', 'spazzola', 'soldato', 'giraffa', 'stivale', 'pescatore', 'panda', 'pera', 'pinguino', 'malato', 'foca', 'pellicano', 'posate', 'lavagna','strada', 'piede', 'pera', 'ragazza', 'computer', 'bicchiere', 'nonna', 'sopra', 'spazzola', 'tigre', 'sorella', 'biscotto', 'patata', 'ridere', 'calzino', 'elicottero', 'denaro', 'lattina', 'arcobaleno', 'camion', 'pompieri', 'hamburger', 'uva', 'giardino', 'giocare', 'foca', 'bello', 'fratello', 'orecchie', 'portafoglio', 'vasca', 'porta', 'sporco', 'biberon', 'risultato', 'laureati', 'frattura', 'giocoliere', 'slacciare', 'cognac','hotel', 'prugna', 'infrazione', 'staffe', 'musicista', 'respiratore', 'morto', 'rabbino', 'liquido', 'meteorite', 'foto', 'acuto', 'intonaco', 'poeta', 'slacciare', 'corni', 'sedersi', 'fulmine', 'paraorecchie','silhouette', 'rotaia', 'ipnotizzare', 'centrifugare', 'contaminazione', 'esperimento', 'salto', 'immenso', 'atleta', 'sporco' ,'microscopio', 'bara', 'cerchio', 'nome'
]

let resetButton = document.getElementById('resetButton');
let randomWordDisplay = document.getElementById('randomWord');
let result = document.getElementById('result');
let lives = document.getElementById('lives');
let playButton = document.getElementById('playButton');
let againButton = document.getElementById('againButton');
let inputText = document.getElementById('inputText');

let livesNumber = 6;
let randomWord;
let letters;

playButton.addEventListener('click', () => {
    randomWord = words[Math.floor(Math.random() * words.length)];  
    letters = randomWord.split("");
    console.log(letters);

    randomWordDisplay.innerText = '';
    letters.forEach(index => {
        let span = document.createElement('span');
        span.classList.add('hidden-letter'); 
        span.setAttribute('data-index', index); 
        span.innerText = ' * '; 
        randomWordDisplay.appendChild(span);
    });
    
    inputText.style.display = 'inline';
    playButton.style.display = 'none';
    lives.style.display = "inline";
});

againButton.addEventListener('click', () => {
    randomWord = words[Math.floor(Math.random() * words.length)];  
    letters = randomWord.split("");
    console.log(letters);

    randomWordDisplay.innerText = '';
    letters.forEach(index => {
        let span = document.createElement('span');
        span.classList.add('hidden-letter'); 
        span.setAttribute('data-index', index); 
        span.innerText = ' * '; 
        randomWordDisplay.appendChild(span);
    });
    result.innerText = "";
    inputText.style.display = 'inline';
    againButton.style.display = 'none';
    lives.style.display = "inline";
    livesNumber = 6;
    lives.innerHTML = `Vite <br> ${livesNumber}`

});
resetButton.addEventListener('click', () =>{
    inputText.style.display = "none";
    playButton.style.display = 'inline';
    againButton.style.display = 'none';
    randomWordDisplay.innerText = "";
    lives.style.display = "none";
    livesNumber = 6;
    lives.innerHTML = `Vite <br> ${livesNumber}`
    result.innerText = "";
})

inputText.addEventListener('keydown', function(event){
    if (event.key === 'Enter') {

        let userLetter = inputText.value.toLowerCase(); 


        // Variabile per tenere traccia se la lettera è presente
        let letterFound = false;

        // Itera su ogni lettera della parola
        letters.forEach((letter, index) => {
            if (letter === userLetter) {
                // Se la lettera coincide, rivela la lettera
                let span = randomWordDisplay.querySelectorAll('span')[index];
                span.innerText = letter;
                span.classList.add('revealed'); // Aggiungi una classe per differenziare le lettere rivelate
                letterFound = true; // Indica che la lettera è stata trovata
            }
        });

        if (!letterFound) {
            // Se la lettera non è stata trovata, diminuisci le vite
            livesNumber--;
            lives.innerHTML = `Vite <br> ${livesNumber}`;

            // Se le vite sono finite, fine del gioco
            if (livesNumber === 0) {
                result.innerHTML = `Hai perso! La parola era <span class="text-uppercase">"${randomWord}"</span>.`;
                result.style.color = "#e74c3c";
                inputText.style.display = "none"; // Disabilita l'input
                againButton.style.display = 'inline'; // Mostra il bottone per rigiocare
                againButton.style.animation = 'bounce 2.5s infinite'
            }
        } else {
            // Controlla se tutte le lettere sono state rivelate (quindi hai vinto)
            const isWordGuessed = [...randomWordDisplay.querySelectorAll('span')].every(span => span.classList.contains('revealed'));
            if (isWordGuessed) {
                result.innerText = "Hai indovinato!";
                result.style.animation = "bounce 2s infinite";
                result.style.color = "#27ae60";
                inputText.style.display = "none"; // Disabilita l'input
                againButton.style.display = 'inline'; // Mostra il bottone per rigiocare
                againButton.style.animation = 'none'
            }
        }
    

        inputText.value = ''; // Pulisci l'input per il prossimo tentativo
    }
});


