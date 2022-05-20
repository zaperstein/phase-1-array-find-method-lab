// code your solution here


function superbowlWin(win) {
  
 let date = win.find(pizza => pizza.result === 'W') 
    if (date){
      return date.year
    } else {
      return undefined
    }
  // date ? date.year : undefined;
  }
  
