let words = ['yogurt', 'madre', 'cestino', 'negozio', 'marciapiede', 'chiocciola', 'orso', 'nuvola', 'uccello', 'uova', 'capra', 'ferita', 'denaro', 'sotto', 'amico', 'spiaggia', 'ragno', 'soldato', 'ghiaccio', 'girasole', 'marrone', 'pala', 'rosa', 'cucitrice', 'colori', 'fiume', 'soldato', 'pantofole', 'sette', 'capelli', 'sole', 'sei', 'testa', 'gomma', 'gonna', 'piedi', 'stivale', 'puzzle', 'calzini', 'pesce',, 'saltare', 'carne', 'nuvola', 'grazie', 'dito', 'vestito', 'orso', 'gesso', 'automobile', 'quadrato', 'zia', 'spazzola', 'soldato', 'giraffa', 'stivale', 'pescatore', 'panda', 'pera', 'pinguino', 'malato', 'foca', 'pellicano', 'posate', 'lavagna','strada', 'piede', 'pera', 'ragazza', 'computer', 'bicchiere', 'nonna', 'sopra', 'spazzola', 'tigre', 'sorella', 'biscotto', 'patata', 'ridere', 'calzino', 'elicottero', 'denaro', 'lattina', 'arcobaleno', 'camion', 'pompieri', 'hamburger', 'uva', 'giardino', 'giocare', 'foca', 'bello', 'fratello', 'orecchie', 'portafoglio', 'vasca', 'porta', 'sporco', 'biberon', 'risultato', 'laureati', 'frattura', 'giocoliere', 'slacciare', 'cognac','hotel', 'prugna', 'infrazione', 'staffe', 'musicista', 'respiratore', 'morto', 'rabbino', 'liquido', 'meteorite', 'foto', 'acuto', 'intonaco', 'poeta', 'slacciare', 'corni', 'sedersi', 'fulmine', 'paraorecchie','silhouette', 'rotaia', 'ipnotizzare', 'centrifugare', 'contaminazione', 'esperimento', 'salto', 'immenso', 'atleta', 'sporco' ,'microscopio', 'bara', 'cerchio', 'nome'
]

let resetButton = document.getElementById('resetButton');
let randomWordDisplay = document.getElementById('randomWord');
let result = document.getElementById('result');
let lives = document.getElementById('lives');
let playButton = document.getElementById('playButton');
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
    playButton.style.display = 'none'
})
