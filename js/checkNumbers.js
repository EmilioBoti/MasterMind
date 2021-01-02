import { randomNum, values, size} from "./index.js"
import { boardPrintText } from "./print.js"
import { resetButton } from "./reset.js"

const checkNumbers = ()=>{
  console.log(randomNum)

    let TakeValue = values.value
    let usersValues = TakeValue.split("")
    
    if(usersValues.length === 5){
      let boxes = container.children//navigate in the DOM
      for(let i = 0; i < usersValues.length; i++){
        let elem = Number(usersValues[i])
        if(elem > 0 && elem <= size){
          if( elem === randomNum[i]){
            boxes[i].innerHTML = elem
          }
        }else{
          alert(`You cannot put numbers less than 1 and greater than ${size}`) 
          i = 5
        }
      }
    }else{
      board.innerHTML = "The number must has five digits"
      setTimeout(()=>{ board.innerHTML = boardPrintText()}, 3000)
    }
    //evaluate if all numbers are correct
    if(randomNum[0] === Number(usersValues[0]) && randomNum[1] === Number(usersValues[1]) && randomNum[2] === Number(usersValues[2])
    && randomNum[3] === Number(usersValues[3]) && randomNum[4] === Number(usersValues[4])){
    
      board.style.color = "green"
      board.innerHTML = "Congradulations, you have guessed all the numbers!!"

      setTimeout(()=>{
        let confir = confirm("Do you want to play again?")
        if(confir) resetButton()}, 1000)
    }  
      //to emty the array
      usersValues.length = 0
}
export { checkNumbers }