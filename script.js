const words = 'ten forgive consider smoke descriptive vanish faulty bee wakeful induce send look marriage amount unbecoming plot room knife instruct haircut badge doubt position omen meddle mountain stone interest overwatch talented brake cake hair jump announce deadlock deafening temporary somber cobweb stem thick trucks remind zippy'.split(' ');
const wordsCount = words.length;

function randomWord() {
    const randomIndex =  Math.ceil(Math.random() * wordsCount);
    return words[randomIndex];
}

function formatWord(word) {
    return `<div class='word'>
            <span class='letter'>
            ${word.split('').join('</span><span class="letter">')}
            </span>
            </div>`;
}

function newGame() {
    document.getElementById('words').innerHTML = '';
    for(let i = 0; i < 200; i++){
        document.getElementById('words').innerHTML += formatWord(randomWord());
    }
}

newGame();