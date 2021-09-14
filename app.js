const copyText = document.getElementById("textColor");
const buttonColor = document.getElementById("buttonColor");
const colorList = document.querySelector('#colorList')


// Reacting a list for unordered list use // 
function createList(el){
    let li = document.createElement('li')
    li.style.backgroundColor = el
    return li
}

// Random Number from 1 - 255 //

const getRandomNumber = () => Math.floor(Math.random() * 256)

// Color generator for RGB Colors

const randomColor = () =>  {
    let r = getRandomNumber()
    let g = getRandomNumber()
    let b = getRandomNumber()

    const randomNumber = (`rgb(${r}, ${g}, ${b})`)
    colorList.appendChild(createList(randomNumber))
    copyText.value = randomNumber
}

document.querySelector('#change_color').addEventListener('click', () => {
    randomColor()
    buttonColor.innerHTML = "Copy Color";
})



// Copy RGB //
buttonColor.addEventListener('click', () => {
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    /* Alert the copied text */
    buttonColor.innerHTML = "Copied";
})
  