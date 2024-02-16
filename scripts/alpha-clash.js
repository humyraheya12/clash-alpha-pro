// function play(){
//     // step-1 hide the home screen
// const homeSection = document.getElementById('home-screen');
// homeSection.classList.add('hidden');
// // console.log(homeSection);

//     // step-2 show the playground
// const playgroundSection = document.getElementById('play-ground');
// playgroundSection.classList.remove('hidden')
// }

function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);
    // stop if pressed esc
    if(playerPressed === 'Escape'){
        gameOver();
    }

    // get the expected press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(currentAlphabet, playerPressed);
    // console.log(currentAlphabetElement.innerText);



    // checked match or not
    if(playerPressed === expectedAlphabet){
        console.log('get point');



        const currentScore = getTextElementValueById('current-score');
        console.log(currentScore);
        const updatedScore = currentScore + 1;
        setElementValueById('current-score', updatedScore);
        // -----------------
        // update score
    //     const currentScoreElement = document.getElementById('current-score');
    //     const currentScoreText = currentScoreElement.innerText;
    //     const currentScore = parseInt(currentScoreText);
    //     console.log(currentScoreText);
  


        // const newScore = currentScore + 1;

    //  currentScoreElement.innerText = newScore;
        // console.log('pressd correctly', expectedAlphabet);
        // 2.start a new round


        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you lost a life');
    //   const currentLifeElement = document.getElementById('current-life');
    //   const currentLifeText = currentLifeElement.innerText;
    //     const currentLife = parseInt(currentLifeText);
    //     console.log(currentLifeText);

    //     const newLife = currentLife - 1;

    //  currentLifeElement.innerText = newLife;


    const currentLife = getTextElementValueById('current-life');
    console.log(currentLife);
    const updatedLife = currentLife - 1;
    setElementValueById('current-life', updatedLife);
if(updatedLife === 0){
    gameOver();
}

    }
}
document.addEventListener('keyup', handleKeyboardButtonPress);  


function continueGame(){
// step1-generate a random alphabet
const alphabet = getRandomAlphabet();
console.log(alphabet);
// set random alphabet to the screen
const currentAlphabetElement = document.getElementById('current-alphabet');
currentAlphabetElement.innerText = alphabet;

// set background color
setBackgroundColorById(alphabet);
}

function play(){
    // hide and show all
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
     // reset score and life
setElementValueById('current-life', 5);


    continueGame();

   

}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // updated final score

    const lastScore = getElementTextById('current-score');
    console.log(lastScore);
    setElementValueById('last-score', lastScore);
    // cleat last selected alphabet
    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}
