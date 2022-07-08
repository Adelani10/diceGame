const playerTurn = document.querySelector(".player-turn")
const firstPlayerSb = document.querySelector(".score-board-1")
const secondPlayerSb = document.querySelector(".score-board-2")
const firstPlayerRollValue = document.querySelector(".first-player-roll-value")
const secondPlayerRollValue = document.querySelector(".second-player-roll-value")
const rollBtn = document.querySelector(".roll-btn")
const resetBtn = document.querySelector(".reset-btn")

let player1Score = 0
let player2Score = 0
let player1Turn = true


rollBtn.addEventListener("click", function(){
    const randomValue = Math.floor(Math.random()* 6 +1)


    if(player1Turn){
        firstPlayerRollValue.textContent = randomValue
        playerTurn.textContent = `Player 2 Turn`
        player1Score += randomValue
        firstPlayerSb.textContent = player1Score
    }
    else {
        secondPlayerRollValue.textContent = `${randomValue}`
        playerTurn.textContent = `Player 1 turn`
        player2Score += randomValue
        secondPlayerSb.textContent = player2Score
    }


    if (player1Turn) {
        player1Turn = false
    }
    else{
        player1Turn = true
    }


    if (player1Score >= 30 && player1Turn == true){
        playerTurn.textContent = `Yayy, Player 1 has won`
        rollBtn.style.display = 'none'
        resetBtn.style.display = 'inline'
    }
    if (player2Score >= 30) {
        playerTurn.textContent = `Yayy, Player 2 has won`
        rollBtn.style.display = 'none'
        resetBtn.style.display = 'inline'
    }
})

resetBtn.addEventListener("click", function(){
    resetGame()
})

 function resetGame(){
    playerTurn.textContent = `Player 1 turn`
    player1Score = 0
    player2Score = 0
    firstPlayerSb.textContent = 0
    secondPlayerSb.textContent = 0
    firstPlayerRollValue.textContent = `-`
    secondPlayerRollValue.textContent = `-`
    rollBtn.style.display = 'inline'
    resetBtn.style.display = 'none'
 }