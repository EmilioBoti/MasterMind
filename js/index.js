import { checkNumbers } from "./checkNumbers.js"
import { resetButton } from "./reset.js"
import { giveUpButton } from "./giveUp.js"

let randomNum = []
let size = 5

  //make the 5 random numbers
  for(let i =0; i < 5; i++){
    randomNum.push(Math.floor((Math.random() * size) +1))
  }

const container = document.getElementById("container")
const board = document.getElementById("board")
const values = document.getElementById("number")

//show and give up the numbers hiden
const giveup = document.getElementById("giveup")
  giveup.addEventListener("click", ()=>{ giveUpButton() })

const reset = document.getElementById("reset")
  reset.addEventListener("click", ()=>{ resetButton() })

const checkValues = document.getElementById("check")
  checkValues.addEventListener("click", ()=>{ checkNumbers() })



export {container,board,values, randomNum,size, checkValues }
