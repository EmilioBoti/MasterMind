  import { boardPrintText } from "./print.js"
  import { container, randomNum, size } from "./index.js"

  //reload the page
 export const resetButton = ()=>{
   
  let boxes = container.children //navigating in the DOM
  
  for(let i = 0; i < boxes.length; i++){  
    randomNum[i] = Math.floor((Math.random() * size) +1) 
    boxes[i].innerHTML = "*"
  }
  boardPrintText()
}
