// Elements
const container = document.querySelector('#container');
container.setAttribute('style', 'display: grid; grid-template-columns: repeat(16, auto); border: 1px solid black; position: relative; width: 400px; height: 400px');

const titleHeader = document.createElement('h1');
titleHeader.textContent = "Etch A Sketch by Keane";
titleHeader.setAttribute('style', 'margin: 10px auto; display: flex; justify-content: center;')

const clearBtn = document.createElement('button');
clearBtn.setAttribute('style', 'width: 75px; height: 30px; margin: 15px; border: 0; background-color: grey; color: white; border-radius:5px; cursor: pointer;');
clearBtn.textContent = "CLEAR";

const newGridBtn = document.createElement('button');
newGridBtn.setAttribute('style', 'width: 95px; height: 30px; margin: 15px; border: 0; background-color: grey; color: white; border-radius:5px; cursor: pointer;');
newGridBtn.textContent = "NEW GRID";

const spanBtns = document.createElement('span');
document.body.setAttribute('style', 'display: flex; flex-direction: column; justify-content: center; align-items: center;');

document.body.insertBefore(titleHeader, container);
document.body.append(spanBtns)
spanBtns.append(clearBtn);
spanBtns.append(newGridBtn);

// Default Grid
let newDiv;
let i;
for (i = 0; i < 16*16; i++){
newDiv = document.createElement('div');
container.appendChild(newDiv);
newDiv.setAttribute('style', 'grid-auto-flow: column;');
newDiv.classList.add('boxes');

}
// Event Listener for Each Div
let divBoxes = document.querySelectorAll('.boxes')
let divsArr = Array.from(divBoxes)

divsArr.forEach((item) => {
    item.addEventListener('mouseenter', () => item.classList.add('boxcolor'))
})

// Clear Button
clearBtn.addEventListener('click', () => {
    divsArr.forEach((item) => {
        item.classList.remove('boxcolor');
    })
})

// Generate New Grid
newGridBtn.addEventListener('click', () => {

    let gridNum = prompt("Please enter the number of squares per side (16 will generate a 16x16 grid)", 16);
        if (gridNum <= 100 && gridNum > 0){
            let existingBoxes = document.querySelectorAll('.boxes');
            let existingArrs = Array.from(existingBoxes);
            existingArrs.forEach((item) =>{
                item.remove();
            });
            container.removeAttribute('style');

            container.setAttribute('style', `display: grid; grid-template-columns: repeat(${gridNum}, auto); border: 1px solid black; position: relative; width: 400px; height: 400px`);
            for (let i = 0; i < gridNum*gridNum; i++){
            newGrid = document.createElement('div');
            newGrid.setAttribute('style', 'grid-auto-flow: column;');
            newGrid.classList.add('boxes');
            container.appendChild(newGrid);
            }
        // Event Listener for the New Divs
        let etchGrid = document.querySelectorAll('.boxes');
        let etchArr = Array.from(etchGrid);
        etchArr.forEach((item) => {
            item.addEventListener('mouseenter', () => item.classList.add('boxcolor'));  
        })
        // Clear Button for New Grid
        clearBtn.addEventListener('click', () => {
            etchArr.forEach((item) => {
                item.classList.remove('boxcolor');
            })
        })
        }
        else if (typeof gridNum === 'string'){
            alert("That's not a number!");
        }
        else {
            alert("You have entered an invalid number! (Max is 100)");
        }
})