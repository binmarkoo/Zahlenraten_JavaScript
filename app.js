document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#submit').addEventListener('click', checkInput);
    document.querySelector('#new-game').addEventListener('click', newGame);
    document.querySelector('#dark-mode').addEventListener('click', darkmode);
    let input = document.getElementById('guess');
    let output = document.querySelector('output');
    const randomNumberMin = 1;
    const randomNumberMax = 100;
    let randomNumber = rand(randomNumberMin, randomNumberMax);
    let guess = 0;
    const maxGuesses = 10;

    function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function checkInput() {
		if (input.value == randomNumber && guess <= maxGuesses) {
			output.innerText = 'Glückwunsch! Sie haben es in  ' + guess + ' Versuch(en) erraten!\nGesuchte Zahl: ' + randomNumber;
        }

        else if (input.value > randomNumber) {
            output.innerText = 'Schade! Versuchen Sie eine kleinere Zahl.';
            guess++;
        }

        else {
            output.innerText = 'Schade! Versuchen Sie eine größere Zahl.';
            guess++;
        }
        if (guess >= maxGuesses) {
            output.innerText = 'Schade! Sie haben ihre 10 Versuche aufgebraucht.\nGesuchte Zahl: ' + randomNumber;
            document.querySelector('#new-game').addEventListener('click', newGame);
        }
        input.value = '';
        return false;
    }

    /* function newGame() {
        if (guess == 10 ) {
            guess = 0;
            rand(randomNumberMin, randomNumberMax);
        }
    } */

    function newGame() {
        location.reload(true);
    }

    function darkmode() {
        let element = document.body;
        element.classList.toggle("dark-mode");
    }
});