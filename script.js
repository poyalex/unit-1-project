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
const boat = new Ship("Boat", 1, 1)
const warship = new Ship ("Warship", 2, 2)
const battleship = new Ship ("Battleship", 3, 3)

console.log (warship)

/*----- event listeners -----*/
    //   playAgainBtn event listener
playAgainBtn.addEventListener('click', begin);
    // playerBoardBtn event listeners

/*----- functions -----*/
    // init {
    //   set turn to 1
    //   set values for both boards to zero
    //   //cpu choices of ship position
    //   math.random to choose inital orientation.math.random to select horizontal or verital(1 or 2 value)
    //   set winner as null
    //   player ship location modal
    //   render
    // }
fucntion createBoard () {
    const sectionPlayerBoard = document.createElement("section")]
    const sectionCpuBoard = document.createElement("section")
    sectionPlayerBoard.setAttribute("id", "playerBoard")
    sectionCpuBoard.setAttribute("id", "cpuBoard")
    for (i=0; i < 11; i++) {
    sectionCpuBoard.createElement(

    )
    sectionPlayerBoard.createElement(
        
    )
    }

}

function begin () {
    turn = "1";
}
    // ship location modal {
    //   prompt player to choose ship locations
    //   push to game board
    // }
    
    // winCheck Funciton {
    //   if playerScore > total ship points
    //     then player win
    //   else if cpuScore > total ship points then cpu win
    //   else if win null
    // }
    
    // cpu 'ai' fuction {
    //   math.random for col indx ref
    // }
    
    // player action function {
    //   grid click event listener will pull grid reference
    //   if === ref 
    //   then alert 'hit' and change grid color red
    //   else change grid color grey
    //   grid click event listener will multiply turn by - 1
    // }

    console.log(playerScore)