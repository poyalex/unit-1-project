	// /*----- constants -----*/
    // set 1 as player 1
    // set - 1 as CPU
    // set 0 as neutral
    
    //     /*----- state variables -----*/
    // set turn
    // set playerboard
    // set cpuboard
    // set playerScore
    // set cpuScore
    // set winner 
    // set ship class
    //   extend ship class with three types and sizes of ships worth different points
    
    //     /*----- cached elements  -----*/
    // set playerScoreBtn
    // set cpuScoreBtn
    // set playAgainBtn
    // set gridButton * Each place on playerBoard needs to be clickable *
    
    //   /*----- event listeners -----*/
    //   playAgainBtn event listener
    // playerBoardBtn event listeners
    
    //     /*----- functions -----*/
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