let arrayOptions = ['rock','paper','scissors','lizzard','spock']
let randomOption = Math.round(Math.random()*4)
let computerRandomMove = arrayOptions[randomOption].toString()
let computerRandomMove2 = arrayOptions[randomOption].toString()
let computerRandomMove3 = arrayOptions[randomOption].toString()
let computerRandomMove4 = arrayOptions[randomOption].toString()
let computerRandomMove5 = arrayOptions[randomOption].toString()

// Rock crushes lizard.
// Rock crushes scissors.
document.getElementById('rock').addEventListener('click', function(){
  document.getElementById('computerMove').innerHTML = computerRandomMove
  if(computerRandomMove === 'scissors' || computerRandomMove === 'lizzard'){
    document.getElementById('result').innerHTML = "You WIN !"
  }
  else if(computerRandomMove ==='rock'){
    document.getElementById('result').innerHTML = "You Tied :|"
  }
  else{ document.getElementById('result').innerHTML = "You lost :( " }
})
//paper
// Paper covers rock.
// Paper disproves Spock.
document.getElementById('paper').addEventListener('click', function(){
  document.getElementById('computerMove').innerHTML = computerRandomMove2
  if(computerRandomMove === 'rock' || computerRandomMove === 'spock'){
    document.getElementById('result').innerHTML = "You WIN !"
  }
  else if(computerRandomMove ==='paper'){
    document.getElementById('result').innerHTML = "You Tied :|"
  }
  else{ document.getElementById('result').innerHTML = "You lost :( " }
})
//scissors
// Scissors cuts paper.
// Scissors decapitates lizard.
document.getElementById('scissors').addEventListener('click', function(){
  document.getElementById('computerMove').innerHTML = computerRandomMove3
  if(computerRandomMove === 'paper' || computerRandomMove === 'lizzard'){
    document.getElementById('result').innerHTML = "You WIN !"
  }
  else if(computerRandomMove ==='scissors'){
    document.getElementById('result').innerHTML = "You Tied :|"
  }
  else{ document.getElementById('result').innerHTML = "You lost :( " }
})
//lizzard
// Lizard poisons Spock.
// Lizard eats paper.
document.getElementById('lizzard').addEventListener('click', function(){
  document.getElementById('computerMove').innerHTML = computerRandomMove4
  if(computerRandomMove === 'spock' || computerRandomMove === 'paper'){
    document.getElementById('result').innerHTML = "You WIN !"
  }
  else if(computerRandomMove ==='lizzard'){
    document.getElementById('result').innerHTML = "You Tied :|"
  }
  else{ document.getElementById('result').innerHTML = "You lost :( " }
})
//spock
// Spock smashes scissors.
// Spock vaporizes rock.
document.getElementById('spock').addEventListener('click', function(){
  document.getElementById('computerMove').innerHTML = computerRandomMove5
  if(computerRandomMove === 'scissors' || computerRandomMove === 'rock'){
    document.getElementById('result').innerHTML = "You WIN !"
  }
  else if(computerRandomMove ==='spock'){
    document.getElementById('result').innerHTML = "You Tied :|"
  }
  else{ document.getElementById('result').innerHTML = "You lost :( " }
})
