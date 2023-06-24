const words = 'ten forgive consider smoke descriptive vanish faulty bee wakeful induce send look marriage amount unbecoming'.split(' ');
const wordsCount = words.length;

function randomWord() {
    const randomIndex =  Math.ceil(Math.random() * wordsCount);
    return words[randomIndex];
}

function newGame() {
    document.getElementById('words').innerHTML = '';
    for(let i = 0; i < 200; i++){
        document.getElementById('words').innerHTML += randomWord;
    }
}

newGame();