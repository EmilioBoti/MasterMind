const container = document.getElementById("container")
const board = document.getElementById("board")
let values = document.getElementById("number")

  let randomNum = []
  let size = 3
  let index = 0
  
  //make the 5 random numbers
  for(let i =0; i < 5; i++){
    randomNum.push(Math.floor((Math.random() * size) +1))
  }
  console.log(randomNum)

  //show all numbers
const show = document.getElementById("show").addEventListener("click", ()=>{alert(randomNum)})

function boardPrintText(){
  board.style.color = "#000000"
  return board.innerHTML = "Let's go, guess all the numbers behind the asterisk (*) sign"
}

  //reload the page
const reset = document.getElementById("reset")
  reset.addEventListener("click", ()=>{
   
    let boxes = container.children //navigating in the DOM
  
    for(let i = 0; i < boxes.length; i++){  
      randomNum[i] = Math.floor((Math.random() * size) +1) 
      boxes[i].innerHTML = "*"
    }
    boardPrintText()
  })

//show and give up the numbers hiden
const giveup = document.getElementById("giveup")
  giveup.addEventListener("click", ()=>{
  
    board.style.color = "red"
    board.innerHTML = "Game Over"

  let boxes = container.children //navigating in the DOM
  for(let i = 0; i < boxes.length; i++){   
    boxes[i].innerHTML = randomNum[i]
  }
})

const check = document.getElementById("check")
check.addEventListener("click", checkValues)

function checkValues(){

  let TakeValue = values.value
  let usersValues = TakeValue.split("")
 
  if(usersValues.length <= 5){
    let boxes = container.children//navigate in the DOM
    for(let i = 0; i < usersValues.length; i++){
      let elem = Number(usersValues[i])
      if(elem > 0 && elem <= size){
        if( elem === randomNum[i]){
          boxes[i].innerHTML = elem
        }
      }else{
         alert(`You can put numbers less or greater than ${size}`) 
         i = 5
      }
    }
  }else{
    board.innerHTML = "The number must has five digits"
    setTimeout(()=>{ board.innerHTML = boardPrintText()}, 5000)
  }
  //evaluate if all numbers are correct
  if(randomNum[0] === Number(usersValues[0]) && randomNum[1] === Number(usersValues[1]) && randomNum[2] === Number(usersValues[2])
   && randomNum[3] === Number(usersValues[3]) && randomNum[4] === Number(usersValues[4])){
  
    board.style.color = "green"
    board.innerHTML = "Congradulations, you have guessed all the numbers!!"
  }  
    //to emty the array
    usersValues.length = 0
}
