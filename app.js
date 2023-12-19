document.addEventListener('DOMContentLoaded', () => {

    const grid = document.querySelector('.grid')
    let squares = Array.from(grid.querySelectorAll('div'))
    const width = 10 
    const height = 20
    let currentPosition = 4

 // LAS FIGURILLAS
const lTetromino =[
    [1, width+1,width*2+1,2],
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1, width*2],
    [width, width*2, width*2+1, width*2+2]   
]    

const zTetromino = [
    [0, width, width+1, width*2+1],
    [width+1, width+2, width*2, width*2+1],
    [0, width, width+1, width*2+1],
    [width+1, width+2, width*2, width*2+1]
]
const tTetromino =[
    [1, width, width+1, width+2],
    [1, width+1, width+2, width*2+1],
    [width, width+1, width+2, width*2+1],
    [1, width, width+1, width*2+1]   
]    

const oTetromino =[
    [0, 1, width, width+1],
    [0, 1, width, width+1],
    [0, 1, width, width+1],
    [0, 1, width, width+1]
] 
const iTetromino =[
    [1, width+1, width*2+1, width*3+1],
    [width, width+1, width+2, width+3],
    [1, width+1, width*2+1, width*3+1],
    [width, width+1, width+2, width+3]
]

const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

// Randomly select the trtromino 

let random = Math.floor(Math.random()*theTetrominoes.length)
let currentRotation = 0 
let current = theTetrominoes[random][currentRotation]

// move the tetromino down


}
)