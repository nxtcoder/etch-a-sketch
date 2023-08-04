function generateCanvas(size) {

const canvas = document.querySelector('.canvas')
let pixels = canvas.querySelectorAll('div')
pixels.forEach((div) => div.remove())
canvas.style.gridTemplateColumns = `repeat(${size} , 1fr)`
canvas.style.gridTemplateRows = `repeat(${size} , 1fr)`

let amount = size * size
for (let i = 0; i < amount; i++) {
    let pixel = document.createElement('div')
    pixel.addEventListener('mouseover', colorPixel)
    pixel.style.backgroundColor = 'white'
    canvas.insertAdjacentElement('beforeend', pixel)
}
}

generateCanvas(16)

function changeSize(){
    let input = prompt("Enter a number between 2 and 100", "16")
    if (input >= 2 && input <= 100){
    generateCanvas(input);
    }else {
        console.log("Wrong Size")
        input = prompt("Enter a number between 2 and 100", "16")
    }
}

let color = 'black'

function colorPixel(){
    if (color === 'random'){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    }else {
    this.style.backgroundColor = color
    }
}

function changeColor(choice){
    color = choice
}

function resetCanvas(){
    let canvas = document.querySelector('.canvas')
    let pixels = canvas.querySelectorAll('div')
    pixels.forEach((div) => div.style.backgroundColor = 'white')
}