const grid = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
]
const gridContainer = document.querySelector("#gridContainer")
const startBtn = document.querySelector("#startBtn")
let currentPlayer = "X"
let dataCell = 0


startBtn.addEventListener('click', () => {
    displayGrid()

})

function displayGrid() {
    gridContainer.textContent = ""
    grid.forEach((rowElement, i) => {
        const row = document.createElement("div")
        rowElement.forEach((cellElement, j) => {
            const cell = document.createElement("p")
            row.appendChild(cell)
            cell.addEventListener('click', () => {
                clickCell(i, j)
                console.log(grid[i][j]);
                cell.textContent = grid[i][j]
            })
            gridContainer.appendChild(row)
        })
    })
}

function clickCell(i, j) {
    grid[i][j] = currentPlayer
    displayGrid()
    console.log(grid);
    
}









displayGrid()
