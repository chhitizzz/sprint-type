const words = 'ten eleven neeva nivia chhitiz subhu bijaya merina sabina manchester united mamba marriage amount unbecoming plot room knife instruct haircut badge doubt position omen meddle mountain stone interest overwatch talented brake cake hair jump announce deadlock deafening temporary somber cobweb stem thick trucks remind zippy bedroom doubtful sock disagree cabbage brother gentle political tense tub mundane light drag lock deeply history language stupid lumpy toothsome imagine sable roll lunch damp decide bushes desire knife thaw knowledgeable skirt heartbreaking agreement roasted shy harass pinch bizarre load hospitable awesome passenger steel wonder middle shave accurate want nippy'.split(' ');
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