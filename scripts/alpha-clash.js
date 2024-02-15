// function play(){
//     // step-1 hide the home screen
// const homeSection = document.getElementById('home-screen');
// homeSection.classList.add('hidden');
// // console.log(homeSection);

//     // step-2 show the playground
// const playgroundSection = document.getElementById('play-ground');
// playgroundSection.classList.remove('hidden')
// }

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
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame('')
}
