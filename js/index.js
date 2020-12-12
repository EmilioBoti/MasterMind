const container = document.getElementById("container")
const board = document.getElementById("board")

  let randomNum = []
  let size = 3
  let usersValues = []
  let index = 0

  //make the 5 random numbers
  for(let i =0; i < 5; i++){
    randomNum.push(Math.floor((Math.random() * size) +1))
  }
  //reload the page
const reset = document.getElementById("reset")
  reset.addEventListener("click", ()=>{
    location.reload()
  })

//show the numbers hiden
const giveup = document.getElementById("giveup")
  giveup.addEventListener("click", ()=>{
  
    board.style.color = "red"
    board.innerHTML = "Game Over"

  let boxes = container.children //navigating in the DOM
  for(let i = 0; i < boxes.length; i++){   
    boxes[i].innerHTML = randomNum[i]
  }
})

const add = document.getElementById("add")
  add.addEventListener("click", addValues)

function addValues(){

  if(usersValues.length < 5){
    let value = document.getElementById("number").value
    if(value <= size && value > 0){
      usersValues[index] = Number(value)
      index++;
    }else{
      if(value > size || value === 0)
          alert(`the number ${value} is greater than 3`)
        else
          alert(`the number ${value} is a negative numbers`)
    }
  }else{
    alert("You already have added 5 numbers")
  }
}
//evaluate if the player win
function toWin(){

  if(randomNum[0] === usersValues[0] && randomNum[1] === usersValues[1] && randomNum[2] === usersValues[2] && randomNum[3] === usersValues[3]
    && randomNum[4] === usersValues[4]){

      board.style.color = "green"
      board.innerHTML = "Congradulations, you have guessed all the numbers!!"
  }  
}
//check if the player got some numbers
const check = document.getElementById("check")
  check.addEventListener("click", ()=>{
    
    let boxes = container.children //navigate in the DOM
    
    for(let i = 0; i < boxes.length; i++){

      if(usersValues[i] === randomNum[i]){
        boxes[i].innerHTML = usersValues[i]
      }
    }
    toWin()
    //to emty the array
    usersValues.length = 0
    index = 0
})  
