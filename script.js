const board = document.querySelector('#board');

let squareNumber = 500;


for (let i = 0; i < squareNumber; i++) {
    const square = document.createElement('div');

    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.appendChild(square);
}

function setColor(element) {
    let color = '';
    function randomColor (){
        let num = Math.floor(Math.random() * (8 + 1 - 1) + 1)
        return num;
    }

    let RandomColor = randomColor();

    if(RandomColor == 1){
        color = 'red'
    }else if(RandomColor == 2){
        color = 'darkgreen'
    }else if(RandomColor == 3){
        color = 'yellow'
    }else if(RandomColor == 4){
        color = 'orange'
    }else if(RandomColor == 5){
        color = 'purple'
    }else if(RandomColor == 6){
        color = 'blue'
    }else if(RandomColor == 7){
        color = 'brown'
    }else if(RandomColor == 8){
        color = 'lightgreen'
    }
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}`;
}


function removeColor(element) {
    element.style.background = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000';
}