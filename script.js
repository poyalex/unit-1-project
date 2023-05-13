/*----- constants -----*/

/*----- state variables -----*/
let turn; 
let playerBoard; 
let cpuBoard; 
let playerScore; 
let cpuScore; 
let winner;
let shipCount;

let playerShip1
let playerShip2 
let cpuShip1
let cpuShip2

    
/*----- cached elements  -----*/
const playerScoreEl = document.querySelector('#playerScore');
const cpuScoreEl = document.querySelector('#cpuScore');
const playAgainBtn = document.querySelector('#playAgain');

/*----- event listeners -----*/
playAgainBtn.addEventListener("click", playAgain);
document.querySelector(".boards").addEventListener('click' , gridClick)


document.querySelector("#modal1Btn").addEventListener("click" , modal1Advance)
document.querySelector("#modal2Btn").addEventListener("click" , modal2Advance)
document.querySelector("#modal3Btn").addEventListener("click" , modal3Advance)

/*----- functions -----*/

function createBoard () {
    //create the two boards and apend to the section with class boards
    const sectionPlayerBoard = document.querySelector("#playerBoard");
    const sectionCpuBoard = document.querySelector("#cpuBoard");

    //event listeners on parent board. *Event Delegation*
    //create board div elements
    // sectionPlayerBoard.append(document.createElement("div").setAttribute("id", `c${i}r9`))
    // const divEl = document.createElement("div")
    for (i=0; i < 10; i++) {
        for (i=0; i<10; i++) {
            const playerDivEl = document.createElement("div")
            playerDivEl.setAttribute("id", `player-c${i}r9`)
            playerDivEl.setAttribute("class", "playerBoard")
            sectionPlayerBoard.append(playerDivEl)

            const cpuDivEl = document.createElement("div")
            cpuDivEl.setAttribute("id", `cpu-c${i}r9`)
            cpuDivEl.setAttribute("class", "cpuBoard")
            sectionCpuBoard.append(cpuDivEl)
        } 

        for (i=0; i<10; i++) {
            const playerDivEl = document.createElement("div")
            playerDivEl.setAttribute("id", `player-c${i}r8`)
            playerDivEl.setAttribute("class", "playerBoard")
            sectionPlayerBoard.append(playerDivEl)

            const cpuDivEl = document.createElement("div")
            cpuDivEl.setAttribute("id", `cpu-c${i}r8`)
            cpuDivEl.setAttribute("class", "cpuBoard")
            sectionCpuBoard.append(cpuDivEl)
        } 

        for (i=0; i<10; i++) {
            const playerDivEl = document.createElement("div")
            playerDivEl.setAttribute("id", `player-c${i}r7`)
            playerDivEl.setAttribute("class", "playerBoard")
            sectionPlayerBoard.append(playerDivEl)

            const cpuDivEl = document.createElement("div")
            cpuDivEl.setAttribute("id", `cpu-c${i}r7`)
            cpuDivEl.setAttribute("class", "cpuBoard")
            sectionCpuBoard.append(cpuDivEl)
        } 

        for (i=0; i<10; i++) {
            const playerDivEl = document.createElement("div")
            playerDivEl.setAttribute("id", `player-c${i}r6`)
            playerDivEl.setAttribute("class", "playerBoard")
            sectionPlayerBoard.append(playerDivEl)

            const cpuDivEl = document.createElement("div")
            cpuDivEl.setAttribute("id", `cpu-c${i}r6`)
            cpuDivEl.setAttribute("class", "cpuBoard")
            sectionCpuBoard.append(cpuDivEl)
        } 

        for (i=0; i<10; i++) {
            const playerDivEl = document.createElement("div")
            playerDivEl.setAttribute("id", `player-c${i}r5`)
            playerDivEl.setAttribute("class", "playerBoard")
            sectionPlayerBoard.append(playerDivEl)

            const cpuDivEl = document.createElement("div")
            cpuDivEl.setAttribute("id", `cpu-c${i}r5`)
            cpuDivEl.setAttribute("class", "cpuBoard")
            sectionCpuBoard.append(cpuDivEl)
        } 

        for (i=0; i<10; i++) {
            const playerDivEl = document.createElement("div")
            playerDivEl.setAttribute("id", `player-c${i}r4`)
            playerDivEl.setAttribute("class", "playerBoard")
            sectionPlayerBoard.append(playerDivEl)

            const cpuDivEl = document.createElement("div")
            cpuDivEl.setAttribute("id", `cpu-c${i}r4`)
            cpuDivEl.setAttribute("class", "cpuBoard")
            sectionCpuBoard.append(cpuDivEl)
        } 

        for (i=0; i<10; i++) {
            const playerDivEl = document.createElement("div")
            playerDivEl.setAttribute("id", `player-c${i}r3`)
            playerDivEl.setAttribute("class", "playerBoard")
            sectionPlayerBoard.append(playerDivEl)

            const cpuDivEl = document.createElement("div")
            cpuDivEl.setAttribute("id", `cpu-c${i}r3`)
            cpuDivEl.setAttribute("class", "cpuBoard")
            sectionCpuBoard.append(cpuDivEl)
        } 

        for (i=0; i<10; i++) {
            const playerDivEl = document.createElement("div")
            playerDivEl.setAttribute("id", `player-c${i}r2`)
            playerDivEl.setAttribute("class", "playerBoard")
            sectionPlayerBoard.append(playerDivEl)

            const cpuDivEl = document.createElement("div")
            cpuDivEl.setAttribute("id", `cpu-c${i}r2`)
            cpuDivEl.setAttribute("class", "cpuBoard")
            sectionCpuBoard.append(cpuDivEl)
        } 

        for (i=0; i<10; i++) {
            const playerDivEl = document.createElement("div")
            playerDivEl.setAttribute("id", `player-c${i}r1`)
            playerDivEl.setAttribute("class", "playerBoard")
            sectionPlayerBoard.append(playerDivEl)

            const cpuDivEl = document.createElement("div")
            cpuDivEl.setAttribute("id", `cpu-c${i}r1`)
            cpuDivEl.setAttribute("class", "cpuBoard")
            sectionCpuBoard.append(cpuDivEl)
        } 

        for (i=0; i<10; i++) {
            const playerDivEl = document.createElement("div")
            playerDivEl.setAttribute("id", `player-c${i}r0`)
            playerDivEl.setAttribute("class", "playerBoard")
            sectionPlayerBoard.append(playerDivEl)

            const cpuDivEl = document.createElement("div")
            cpuDivEl.setAttribute("id", `cpu-c${i}r0`)
            cpuDivEl.setAttribute("class", "cpuBoard")
            sectionCpuBoard.append(cpuDivEl)
        } 
    }
}
createBoard();

function gridClick (evt) {
    if (evt.target.className === "playerBoard" && shipCount === 0) {
        document.querySelector(`#${evt.target.id}`).style.background = "black"
        playerShip1 = evt.target.id
        cpuShip1 = `cpu-c${Math.floor(Math.random()*10)}r${Math.floor(Math.random()*10)}`
        shipCount += 1
    } else if (evt.target.className === "playerBoard" && shipCount === 1) {
        if (evt.target.id === playerShip1) {
    
        } else {
            document.querySelector(`#${evt.target.id}`).style.background = "black"
            playerShip2 = evt.target.id
            cpuShip2 = `cpu-c${Math.floor(Math.random()*10)}r${Math.floor(Math.random()*10)}`
            shipCount += 1
            turn +=1
            function transition () {
                document.querySelector("#playerBoard").style.visibility = "hidden"
                document.querySelector("#cpuBoard").style.visibility = "hidden"
                document.querySelector("#modal3").style.visibility = "visible"
            }
            setTimeout(transition, 400)
        }
    } else if (evt.target.className === "cpuBoard" && turn > 0 && !(document.querySelector(`#${evt.target.id}`).style.background === "red")) {
            if (cpuShip1 === evt.target.id || cpuShip2 === evt.target.id) {
                document.querySelector(`#${evt.target.id}`).style.background = "red"
                playerScore += 1
                turn *= -1
                scores()
                cpuship1 = null
            } else {
                document.querySelector(`#${evt.target.id}`).style.background = "darkgrey"
                turn *= -1
            }
        winCheck ()
        setTimeout(cpuAi,100)
    } else if (evt.target.className === "playerBoard" && turn < 0 && !(document.querySelector(`#${evt.target.id}`).style.background === "red")) {
        if (playerShip1 === evt.target.id || playerShip2 === evt.target.id) {
            document.querySelector(`#${evt.target.id}`).style.background = "red"
            cpuScore += 1
            turn *= -1
            scores()
        } else {
            document.querySelector(`#${evt.target.id}`).style.background = "darkgrey"
            turn *= -1
        }
        winCheck()
    }
    
}
    

function cpuAi () {
    document.querySelector(`#player-c${Math.floor(Math.random()*10)}r${Math.floor(Math.random()*10)}`).click()
    console.log(turn)
}

function winCheck () {
    if (playerScore > 1) {
        winner = "Commandant"
        document.querySelector("#playerBoard").style.visibility = "hidden"
        document.querySelector("#cpuBoard").style.visibility = "hidden"
        document.querySelector("#winScreen").style.visibility = "Visible"
        document.querySelector("#winScreen").style.height = "100px"
        document.querySelector("#winScreen").style.width = "300px"
        document.querySelector("#winScreen").innerHTML = `${winner} we have won the battle! Huzzah!`
    } else if (cpuScore > 1) {
        winner = "The Enemy"
        document.querySelector("#playerBoard").style.visibility = "hidden"
        document.querySelector("#cpuBoard").style.visibility = "hidden"
        document.querySelector("#winScreen").style.visibility = "Visible"
        document.querySelector("#winScreen").style.height = "100px"
        document.querySelector("#winScreen").style.width = "300px"
        document.querySelector("#winScreen").innerHTML = `${winner} has won the battle. Commandant you have shamed our nation. Prepare for execution.`
    }
}

function changeStyles () {
    console.log ("change")
    document.querySelector("#playerBoard").style.visibility = "hidden"
    document.querySelector("#cpuBoard").style.visibility = "hidden"
    document.querySelector("#modal3").style.visibility = "visible"
    }

function begin () {
    turn = 0
    shipCount = 0
    playerScore = 0
    cpuScore = 0
    winner = 0
}
begin ()

function scores () {
    playerScoreEl.innerHTML = `Player: ${playerScore}`
    cpuScoreEl.innerHTML = `CPU: ${cpuScore}`
}
scores ()

function playAgain () {
    location.reload()
}

function modal1Advance () {
    document.querySelector("#modal1").style.visibility = "hidden"
    document.querySelector("#modal1").style.height = "0px"
    document.querySelector("#modal1").style.width = "0px"
    document.querySelector("#modal2").style.visibility = "visible"
}

function modal2Advance () {
    document.querySelector("#modal2").style.visibility = "hidden"
    document.querySelector("#modal2").style.height = "0px"
    document.querySelector("#modal2").style.width = "0px"
    document.querySelector("#playerBoard").style.visibility = "visible"
    document.querySelector("#cpuBoard").style.visibility = "visible"
}

function modal3Advance () {
    document.querySelector("#modal3").style.visibility = "hidden"
    document.querySelector("#modal3").style.height = "0px"
    document.querySelector("#modal3").style.width = "0px"
    document.querySelector("#playerBoard").style.visibility = "visible"
    document.querySelector("#cpuBoard").style.visibility = "visible"
    document.querySelector(".header").style.visibility = "visible"
}
