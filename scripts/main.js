const container = document.querySelector('#container');
container.setAttribute('style', 'display: grid; grid-template-columns: repeat(16, 4.5vw); border: 1px solid black')

const titleHeader = document.createElement('h1');
titleHeader.textContent = "Etch A Sketch";
titleHeader.setAttribute('style', 'margin: 0 auto; display: flex; justify-content: center;')

document.body.setAttribute('style', 'display: flex; flex-direction: column; justify-content: center; align-items: center;')
const titleDesc = document.createElement('p');
titleDesc.textContent = ""

document.body.insertBefore(titleHeader, container);
document.body.insertBefore(titleDesc, titleHeader);

function hover(element, className){
element.addEventListener('mouseenter', e => element.classList.add(className));
}

    let newDiv;
    let i;
    for (i = 0; i < 256; i++){
    newDiv = document.createElement('div');
    newDiv.setAttribute('style', 'width:4.5vw; height:4.5vh;');
    newDiv.classList.add('boxes');
    
    container.appendChild(newDiv);
    }
    const divBoxes = document.querySelectorAll('.boxes')

    let divsArr = Array.from(divBoxes)
    
    divsArr.forEach((item) => {
        item.addEventListener('mouseenter', () => item.classList.add('boxcolor'))
    })


// A LIST OF ALL THE SOLUTIONS I'VE TRIED BUT DID NOT WORK
// const colorDivs = document.querySelector('div');

// document.addEventListener("mouseover", e => {
//     if (e.target.matches('.boxes')){
//         colorDivs.classList.add('boxcolor');
//     }
// })
// const colorDivs = document.querySelector('.boxcolor');
// document.body.addEventListener('mouseover', e => {
//     if (e.target !== colorDivs){
//         return
//     }
//     e.classList.add('boxcolor');
// })

// colorDivs.forEach(element => {
//     element.addEventListener('mouseover', (e) => {
//         element.classList.add('boxcolor');
//         e.stopPropagation(); 
//     }, {capture: false})
// })
// document.querySelectorAll('.gbox').forEach(item => {
//     item.addEventListener('mouseenter', () => {
//         item.classList.add('boxcolor');
//     })
// })
