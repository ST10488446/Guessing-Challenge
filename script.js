let secretNumber = Math.floor(Math.random()*100)+1;
let attempts =0;
function checkGuess() {
    const userGuess = Number ( documnt.getElementById('guess').value);
    const message = document.getElementById('message')
    attempts++;
    document.getElementById('attempts').textContent = attempts;
    if (userGuess === secretNumber){
        message.textContent = 'Correct ! The number was ${secretNumber}';
        message.style.color = 'lighgreen';
    } else if (userGuess < secretNumber){
        message.textContent = 'Too low !Try again';
        message.style.color = 'Red';
    }else {
        message.textContent = 'Too high! Try again';
        message.style.color = 'Red';
    }
}
function restartGame(){
secretNumber = Math.floor(Math.random()*100) + 1;
  attempts = 0
  document.getElementById('attempts').textContent = attempts;
  document.getElementById('guess').value='';
  document.getElementById('message').textContent='';

}