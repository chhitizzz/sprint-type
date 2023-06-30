const words = 'ten eleven neeva nivia chhitiz subhu bijaya merina sabina manchester united mamba marriage amount unbecoming plot room knife instruct haircut badge doubt position omen meddle mountain stone interest overwatch talented brake cake hair jump announce deadlock deafening temporary somber cobweb stem thick trucks remind zippy bedroom doubtful sock disagree cabbage brother gentle political tense tub mundane light drag lock deeply history language stupid lumpy toothsome imagine sable roll lunch damp decide bushes desire knife thaw knowledgeable skirt heartbreaking agreement roasted shy harass pinch bizarre load hospitable awesome passenger steel wonder middle shave accurate want nippy'.split(' ');
const wordsCount = words.length;

function addClass(el, name){
    el.className += ' '+name;
}

function removeClass(el, name){
    el.className = el.className.replace(name, '');
}

function randomWord() {
    const randomIndex =  Math.ceil(Math.random() * wordsCount);
    return words[randomIndex - 1];
}

function formatWord(word) {
    return `<div class='word'><span class="letter">${word.split('').join('</span><span class="letter">')}</span></div>`;
}

function newGame() {
    document.getElementById('words').innerHTML = '';
    for(let i = 0; i < 200; i++){
        document.getElementById('words').innerHTML += formatWord(randomWord());
    }
    addClass(document.querySelector('.word'), 'current');
    addClass(document.querySelector('.letter'), 'current');
}

document.getElementById('game').addEventListener('keyup', ev => {
    const key = ev.key;
    const currentWord = document.querySelector('.word.current');
    const currentLetter = document.querySelector('.letter.current');
    const expected = currentLetter?.innerHTML || ' ';
    const isLetter = key.length === 1 && key !== ' ';
    const isSpace = key === ' ';
    const isBackspace = key === 'Backspace';
    const isFirstLetter = currentLetter === currentWord.firstChild;

    console.log({key,expected});

    if(isLetter) {
        if (currentLetter) {
            addClass(currentLetter, key === expected ? 'correct' : 'incorrect');
            removeClass(currentLetter, 'current');
            if (currentLetter.nextSibling){
                addClass(currentLetter.nextSibling, 'current');
            }
        } else {
            const incorrectLetter = document.createElement('span');
            incorrectLetter.innerHTML = key;
            incorrectLetter.classList = 'letter incorrect extra';
            currentWord.appendChild(incorrectLetter);
        }
    }

    if(isSpace){
        if (expected !== ' '){
            const lettersToInvalidate = [...document.querySelectorAll('.word.current .letter:not(.correct)')]
            lettersToInvalidate.forEach(letter => {
                addClass(letter, 'incorrect');
            });
        }
        removeClass(currentWord, 'current');
        addClass(currentWord.nextSibling, 'current');
        if(currentLetter){
            removeClass(currentLetter, 'current');
        }
        addClass(currentWord.nextSibling.firstChild,'current');
    }

    if (isBackspace) {
        if (currentLetter && isFirstLetter){
            removeClass(currentWord, 'current');
            addClass(currentWord.previousSibling, 'current');
            removeClass(currentLetter, 'current');
            addClass(currentWord.previousSibling.lastChild, 'current');
            removeClass(currentWord.previousSibling.lastChild, 'incorrect');
            removeClass(currentWord.previousSibling.lastChild, 'correct');
        }
        
        if (currentLetter && !isFirstLetter) {
            removeClass(currentLetter, 'current');
            addClass(currentLetter.previousSibling, 'current');
            removeClass(currentLetter.previousSibling, 'incorrect');
            removeClass(currentLetter.previousSibling, 'correct');
        } 

        if (!currentLetter) {
            addClass(currentWord.lastChild, 'current');
            removeClass(currentWord.lastChild, 'incorrect');
            removeClass(currentWord.lastChild, 'correct');
        }
    }
    if (currentWord.getBoundingClientRect().top > 260) {
        const words = document.getElementById('words');
        const margin = parseInt(words.style.marginTop || '0px');
        words.style.marginTop = (margin - 35) + 'px';
    }



    const nextLetter = document.querySelector('.letter.current');
    const nextWord = document.querySelector('.word.current');
    const cursor = document.getElementById('cursor');
    cursor.style.top = (nextLetter || nextWord).getBoundingClientRect().top + 2 + 'px';
    cursor.style.left = (nextLetter || nextWord).getBoundingClientRect()[nextLetter ? 'left' : 'right'] + 'px';
})

newGame();