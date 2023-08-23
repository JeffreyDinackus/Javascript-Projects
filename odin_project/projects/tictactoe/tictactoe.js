

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

function choose() {
  console.log(true)
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