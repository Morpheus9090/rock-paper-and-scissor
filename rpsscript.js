
function rpsgame(playerMove) {

   const computerMove = pcmove();

    let result = '';

    if(playerMove === 'rock'){
        if(computerMove === 'rock'){
            result = 'Tie';
        }
        else if(computerMove === 'paper'){
            result = 'you lose';
        }
        else if(computerMove === 'scissors') {
            result = 'you win'
        }
    }

    else if(playerMove === 'paper'){
        if(computerMove === 'rock'){
            result = 'you win';
        }
        else if(computerMove === 'paper'){
            result = 'Tie';
        }
        else if(computerMove === 'scissors') {
            result = 'you lose'
        }
    }

    else if(playerMove === 'scissors'){
        if(computerMove === 'rock'){
            result = 'you lose';
        }
        else if(computerMove === 'paper'){
            result = 'you win';
        }
        else if(computerMove === 'scissors') {
            result = 'Tie'
        }
    }
    console.log(computerMove);
    alert(`you picked ${playerMove} computer picked ${computerMove}. ${result}`);
}

function pcmove(){
    const randomnumber = Math.random();
    let computerMove = '';
    if(randomnumber >= 0 && randomnumber <= 1/3){
        computerMove = 'rock';
    }
    else if(randomnumber >= 1/3 && randomnumber <= 2/3){
        computerMove = 'paper';
    }
    else if (randomnumber >= 2/3 && randomnumber <= 1){
        computerMove = 'scissors';
    }
    return (computerMove);

}




