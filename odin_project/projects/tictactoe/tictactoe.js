

const gamepiece = () => {
  board = [null, null, null, null, null, null, null, null, null]


  const X = (coordinate) => {
    board[coordinate] = "X";
  }
  const O = (coordinate) => {
    board[coordinate] = "O"
  }

  return { X, O }
}

game = gamepiece()

function test() {
  console.log(true)
}
count = 0;


function incrementCount() {
  count += 1;


}

function winscreen() {

}


function checkWinorTie() {
  one = document.getElementById("spot1")
  two = document.getElementById("spot2")
  three = document.getElementById("spot3")
  four = document.getElementById("spot4")
  five = document.getElementById("spot5")
  six = document.getElementById("spot6")
  seven = document.getElementById("spot7")
  eight = document.getElementById("spot8")
  nine = document.getElementById("spot9")


  draw = false
  win = false



  if (one.textContent == "X" && two.textContent == "X" && three.textContent == "X" || four.textContent == "X" && five.textContent == "X" && six.textContent == "X" || seven.textContent == "X" && eight.textContent == "X" && nine.textContent == "X" || one.textContent == "X" && five.textContent == "X" && nine.textContent == "X" || three.textContent == "X" && five.textContent == "X" && seven.textContent == "X" || one.textContent == "X" && four.textContent == "X" && seven.textContent == "X" || two.textContent == "X" && five.textContent == "X" && eight.textContent == "X" || three.textContent == "X" && six.textContent == "X" && nine.textContent == "X") {
    console.log("X WINS")


  } else if (one.textContent == "O" && two.textContent == "O" && three.textContent == "O" || four.textContent == "O" && five.textContent == "O" && six.textContent == "O" || seven.textContent == "O" && eight.textContent == "O" && nine.textContent == "O" || one.textContent == "O" && five.textContent == "O" && nine.textContent == "O" || three.textContent == "O" && five.textContent == "O" && seven.textContent == "O" || one.textContent == "O" && four.textContent == "O" && seven.textContent == "O" || two.textContent == "O" && five.textContent == "O" && eight.textContent == "O" || three.textContent == "O" && six.textContent == "O" && nine.textContent == "O") {
    console.log("O WINS")

  } else if (one.textContent != "" && two.textContent != "" && three.textContent != "" && four.textContent != "" && five.textContent != "" && six.textContent != "" && seven.textContent != "" && eight.textContent != "" && nine.textContent != "") {
    console.log("DRAW")
  }





}








function choose(number) {
  console.log(true, number)

  move = document.getElementById(`spot${number}`)


  if (move.textContent == "X" || move.textContent == "O") {
    console.log("error spot taken")
  } else {
    if (count % 2 == 0) {
      move.textContent = "X";
      incrementCount();
    }
    else {
      move.textContent = "O";
      incrementCount();

    }
  }


  checkWinorTie();

}

const player = (playerName, marker) => {
  const sayHello = () => {
    console.log("XD")
  }
  return { sayHello, marker }
}

marty = player("Marty", "O")

marty.sayHello()

console.log(marty.marker)
// board = [[null, null, null], [null, null, null], [null, null, null]]
// console.log(board)

// board = [["blank", "blank", "blank"], ["blank", "blank", "blank"], ["blank", "blank", "blank"]]
// console.log(board)