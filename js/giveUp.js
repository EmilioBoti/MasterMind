import { container, randomNum } from "./index.js"

const giveUpButton = ()=>{

  board.style.color = "red"
  board.innerHTML = "Game Over"

  let boxes = container.children //navigating in the DOM
  for(let i = 0; i < boxes.length; i++){   
    boxes[i].innerHTML = randomNum[i]
  }
}
export { giveUpButton }

