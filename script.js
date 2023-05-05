/*----- constants -----*/
const colors = {
    '1' : 'red' , //player
    '-1' : 'blue' , //cpu
    '0' : 'grey' //blank 
};

/*----- state variables -----*/
let turn; // set turn
let playerBoard; // set playerboard
let cpuBoard; // set cpuboard
let playerScore; // set playerScore
let cpuScore; // set cpuScore
let winner; //set winner 

    
/*----- cached elements  -----*/
    // set playerScoreEl
const playerScoreEl = document.querySelector('#playerScore');
    // set cpuScoreEl
const cpuScoreEl = document.querySelector('#cpuScore');
    // set playAgainBtn
const playAgainBtn = document.querySelector('#playAgain');
    // set gridButton * Each place on playerBoard needs to be clickable *
const coordinate = 0;



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

console.log (warship)

/*----- event listeners -----*/
    //   playAgainBtn event listener
playAgainBtn.addEventListener('click', begin);
    // playerBoardBtn event listeners

/*----- functions -----*/

//function to generate div elements for board and add event listeners
function createBoard () {
    //create the two boards and apend to the section with class boards
    // document.querySelector(".boards").addEventListener("click", gridClick)
    const sectionPlayerBoard = document.querySelector("#playerBoard");
    const sectionCpuBoard = document.querySelector("#cpuBoard");
    sectionPlayerBoard.style.background = 'red';
    sectionCpuBoard.style.background = 'blue';
    const divEl = document.createElement("div")

    //event listeners on  parent boards 
    //create board div elements
    // sectionPlayerBoard.append(document.createElement("div").setAttribute("id", `c${i}r9`))
    for (i=0; i < 10; i++) {
        for (i=0; i<10; i++) {
            const playerDivEl = document.createElement("div")
            playerDivEl.setAttribute("id", `player-c${i}r9`)
            sectionPlayerBoard.append(playerDivEl)

            const cpuDivEl = document.createElement("div")
            cpuDivEl.setAttribute("id", `cpu-c${i}r9`)
            sectionCpuBoard.append(cpuDivEl)
        } 

    }
    //Board Css Styling
}
createBoard();


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
    turn = "1";
    playerBoard = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // C0
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    // R0
    ];

    cpuBoard = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //Col 0
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    // R0
    ];

    winner = null;
    renderBoard();
}
begin ()

    // ship location modal {
    //   prompt player to choose ship locations
    //   push to game board
    // }
function renderBoard() {

}
    
    // winCheck Funciton {
    //   if playerScore > total ship points
    //     then player win
    //   else if cpuScore > total ship points then cpu win
    //   else if win null
    // }
    
    // cpu 'ai' fuction {
    //   math.random for col indx ref
    // }
// *********** Need to research .indexOf method ********
function cpuAi () {
    if (turn === -1) {
        
    }
}
    // player action function {
    //   grid click event listener will pull grid reference
    //   if === ref 
    //   then alert 'hit' and change grid color red
    //   else change grid color grey
    //   grid click event listener will multiply turn by - 1
    // }
function gridClick () {
    if (turn === 1) {
    
    turn *=-1
    } else if (turn === -1) {
       
    }
}
    console.log(playerScore)