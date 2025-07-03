
const gameContainer = document.querySelector("#gameContainer")
const gridContainer = document.querySelector("#gridContainer")
const startBtn = document.querySelector("#startBtn")
const restartBtn = document.querySelector("#restartBtn")
const h1 = document.querySelector("h1")
const rules = document.querySelector("#rules")


function morpionPVP() {
    let grid = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]
    let currentPlayer = "X"
    let gameEnd = false

    h1.textContent = "Tic-Tac-Toe"
    rules.textContent = "Tic-Tac-Le but du jeu est d'aligner avant son adversaire 3 symboles identiques horizontalement, verticalement ou en diagonale."

    // startBtn.addEventListener('click', () => {
    //     displayGrid()
    // })
    displayGrid()

    function displayGrid() {
        grid.forEach((rowElement, i) => {
            const row = document.createElement("div")
            gridContainer.appendChild(row)
            rowElement.forEach((cellElement, j) => {
                const cell = document.createElement("p")
                row.appendChild(cell)
                cell.addEventListener('click', () => {
                    clickCell(i, j, cell, endGamePara)
                })
                restartBtn.addEventListener('click', () => {
                    reset(cell, endGamePara)
                })
            })
        })
        const endGamePara = document.createElement("p")
        gameContainer.appendChild(endGamePara)
    }

    function clickCell(i, j, cell, endGamePara) {
        if (gameEnd == true || grid[i][j] != "") return
        grid[i][j] = currentPlayer
        cell.textContent = currentPlayer;
        if (checkWin()) {
            endGamePara.textContent = `Bravo player ${currentPlayer}, tu as gagné !`
            gameEnd = true
        } else if (grid[0].every((elem) => elem != "") && grid[1].every((elem) => elem != "") && grid[2].every((elem) => elem != "")) {
            endGamePara.textContent = "Egalité..."
            gameEnd = true
        } else {
            currentPlayer = currentPlayer == "X" ? "O" : "X"
        }
    }

    function checkWin() {
        for (let i = 0; i < grid.length; i++) {
            if (grid[i][0] != "" && grid[i][0] == grid[i][1] && grid[i][0] == grid[i][2]) {
                return true
            } else if ((grid[0][i] != "" && grid[0][i] == grid[1][i] && grid[0][i] == grid[2][i])) {
                return true
            }
        }
        if ((grid[0][0] != "" && grid[0][0] == grid[1][1] && grid[0][0] == grid[2][2])) {
            return true
        } else if ((grid[2][0] != "" && grid[2][0] == grid[1][1] && grid[2][0] == grid[0][2])) {
            return true
        }
        return false
    }

    function reset(cell, endGamePara) {
        grid.forEach((element, i) => {
            grid[i].fill("")
        });
        cell.textContent = ""
        currentPlayer = "X"
        gameEnd = false
        endGamePara.textContent = ""
    }
}



























function morpionPVE() {
    let grid = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]

    let currentPlayer = "X"
    let cpuMode = false
    let gameEnd = false

    h1.textContent = "Tic-Tac-Toe"
    rules.textContent = "Tic-Tac-Le but du jeu est d'aligner avant son adversaire 3 symboles identiques horizontalement, verticalement ou en diagonale."

    // startBtn.addEventListener('click', () => {
    displayGrid()
    // })

    function displayGrid() {
        gameContainer.innerHTML = ""
        const endGamePara = document.createElement("p")
        gameContainer.appendChild(endGamePara)
        grid.forEach((rowElement, i) => {
            const row = document.createElement("div")
            gridContainer.appendChild(row)
            rowElement.forEach((cellElement, j) => {
                const cell = document.createElement("p")
                cell.classList = "cell"
                cell.textContent = grid[i][j]
                row.appendChild(cell)
                cell.addEventListener('click', () => {
                    clickCell(i, j, cell, endGamePara)
                    // if (cpuMode) {
                    //     cpuTurn(i, j, cell, endGamePara)
                    // }
                })
                restartBtn.addEventListener('click', () => {
                    reset(cell, endGamePara)
                })
            })
        })
    }

    function clickCell(i, j, cell, endGamePara) {
        if (gameEnd == true || grid[i][j] != "") return
        grid[i][j] = currentPlayer
        displayGrid()
        if (checkWin()) {
            endGamePara.textContent = `Bravo player ${currentPlayer}, tu as gagné !`
            gameEnd = true
        } else if (grid[0].every((elem) => elem != "") && grid[1].every((elem) => elem != "") && grid[2].every((elem) => elem != "")) {
            endGamePara.textContent = "Egalité..."
            gameEnd = true
        } else {
            currentPlayer = currentPlayer == "X" ? "O" : "X"
            cpuTurn(i, j, cell, endGamePara)
        }
    }

    function checkWin() {
        for (let i = 0; i < grid.length; i++) {
            if (grid[i][0] != "" && grid[i][0] == grid[i][1] && grid[i][0] == grid[i][2]) {
                return true
            } else if ((grid[0][i] != "" && grid[0][i] == grid[1][i] && grid[0][i] == grid[2][i])) {
                return true
            }
        }
        if ((grid[0][0] != "" && grid[0][0] == grid[1][1] && grid[0][0] == grid[2][2])) {
            return true
        } else if ((grid[2][0] != "" && grid[2][0] == grid[1][1] && grid[2][0] == grid[0][2])) {
            return true
        }
        console.log(grid);
        return false
    }

    function reset(cell, endGamePara) {
        grid.forEach((element, i) => {
            grid[i].fill("")
        });
        cell.textContent = ""
        currentPlayer = "X"
        gameEnd = false
        endGamePara.textContent = ""
    }

    function randomize(min, max) {
        return Math.round(Math.random() * (max - min) + min)
    }

    function cpuTurn(i, j, cell, endGamePara) {
        let iRandom = randomize(0, grid.length - 1)
        let jRandom = randomize(0, grid[iRandom].length - 1)

        while ((gameEnd == false && grid[iRandom][jRandom] == "")) {
            grid[iRandom][jRandom] = "O"
        }
    }
    currentPlayer = currentPlayer == "X" ? "O" : "X"
    displayGrid()
}


morpionPVE()

