/*----- constants -----*/
const colors = {
    '1' : 'red' , //player
    '-1' : 'blue' , //cpu
    '0' : 'lightgrey' //blank 
};

/*----- state variables -----*/
let turn; // set turn
let playerBoard; // set playerboard
let cpuBoard; // set cpuboard
let playerScore; // set playerScore
let cpuScore; // set cpuScore
let winner; //set winner 
let shipCount; //count number of placed ships

//Set ships
let playerShip1
let playerShip2 
let cpuShip1
let cpuShip2

    
/*----- cached elements  -----*/
    // set playerScoreEl
const playerScoreEl = document.querySelector('#playerScore');
    // set cpuScoreEl
const cpuScoreEl = document.querySelector('#cpuScore');
    // set playAgainBtn
const playAgainBtn = document.querySelector('#playAgain');
    // set gridButton * Each place on playerBoard needs to be clickable *
// const coordinate = 0;



    // set ship class + extend ship class with three types and sizes of ships worth different points
class Ship {
    constructor(name, size, points){
        this.name = name;
        this.size = size;
        this.points = points;
    }
}
const boat = new Ship("Boat", 1, 1);
const warship = new Ship ("Warship", 2, 2);
const battleship = new Ship ("Battleship", 3, 3);

/*----- event listeners -----*/
    //   playAgainBtn event listener
playAgainBtn.addEventListener('click', begin);
    // Board Spaces event listeners
document.querySelector(".boards").addEventListener('click' , gridClick)

//Modal event listeners
document.querySelector("#modal1Btn").addEventListener('click' , modal1Advance)
document.querySelector("#modal2Btn").addEventListener('click' , modal2Advance)
document.querySelector("#modal3Btn").addEventListener('click' , modal3Advance)

/*----- functions -----*/
//function to generate div elements for board and add event listeners
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

    // player action function {
    //   grid click event listener will pull grid reference
    //   if === ref 
    //   then alert 'hit' and change grid color red
    //   else change grid color grey
    //   grid click event listener will multiply turn by - 1
    // }
//Stack overflow simulate click *******document.getElementById('elementID').click();********
function gridClick (evt) {
    // console.log(evt)
    // console.log(evt.currentTarget)
    // console.log(evt.target)
    // console.log(evt.target.className)
    // console.log(evt.target.id)
    //Dictates intial ship placement and then handles turns between player and cpu
    if (evt.target.className === "playerBoard" && shipCount === 0) {
        document.querySelector(`#${evt.target.id}`).style.background = "darkgrey"
        playerShip1 = evt.target.id
        cpuShip1 = `cpu-c${Math.floor(Math.random()*11)}r${Math.floor(Math.random()*11)}}`
        shipCount += 1
    } else if (evt.target.className === "playerBoard" && shipCount === 1) {
        if (evt.target.id === playerShip1) {

        } else {
            document.querySelector(`#${evt.target.id}`).style.background = "darkgrey"
            playerShip2 = evt.target.id
            cpuShip2 = `cpu-c${Math.floor(Math.random()*11)}r${Math.floor(Math.random()*11)}}`
            shipCount += 1
            setTimeout(document.querySelector("#playerBoard").style.visibility = "hidden", 20000000)
            setTimeout(document.querySelector("#cpuBoard").style.visibility = "hidden", 20000000)
            setTimeout(document.querySelector("#modal3").style.visibility = "visible", 20000000)
        }
    } else if (evt.target.className === "cpuBoard" && turn > 0) {
        document.querySelector(`#${evt.target.id}`).style.background = "red"
        winCheck ()
        turn *= -1
        cpuAi ()
    } else if (evt.target.className === "playerBoard" && turn < 0) {
        document.querySelector(`#${evt.target.id}`).style.background = "blue"
        winCheck ()
        turn *= -1
    }
}

    // cpu 'ai' fuction {
    //   math.random for col indx ref
    // }





    // init {
    //   set turn to 1
    //   set values for both boards to zero
    //   //cpu choices of ship position
    //   math.random to choose inital orientation.math.random to select horizontal or verital(1 or 2 value)
    //   set winner as null
    //   player ship location modal
    //   render
    // }

function begin () {
    turn = 1
    shipCount = 0
    // playerBoard = [
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // C0
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    // // R0
    // ];

    // cpuBoard = [
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //Col 0
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    // // R0
    // ]

    winner = null
}
begin ()

    // ship location modal {
    //   prompt player to choose ship locations
    //   push to game board
    // }
    // *********** Need to research .indexOf method ********
    
    // winCheck Funciton {
    //   if playerScore > total ship points
    //     then player win
    //   else if cpuScore > total ship points then cpu win
    //   else if win null
    // }
function winCheck () {
    if (playerScore > 1) {

    } else if (cpuScore > 1) {

    }
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
}
