/*----- constants -----*/
const colors = {
    '1' : 'red' , //player
    '-1' : 'blue' , //cpu
    '0' : 'grey' //blank 
}

/*----- state variables -----*/
let turn; // set turn
let playerBoard; // set playerboard
let cpuBoard; // set cpuboard
let playerScore; // set playerScore
let cpuScore; // set cpuScore
let winner; //set winner 
    // set ship class
    //   extend ship class with three types and sizes of ships worth different points
    
/*----- cached elements  -----*/
    // set playerScoreEl
const playerScoreEl = document.querySelector('#playerScore')
    // set cpuScoreEl
const cpuScoreEl = document.querySelector('#cpuScore')
    // set playAgainBtn
const playAgainBtn = document.querySelector('button')
    // set gridButton * Each place on playerBoard needs to be clickable *
/*----- event listeners -----*/
    //   playAgainBtn event listener
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