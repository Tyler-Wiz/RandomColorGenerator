const copyText = document.getElementById("textColor");
const buttonColor = document.getElementById("buttonColor");
const colorList = document.querySelector('#colorList')

function createList(el){
    let li = document.createElement('li')
    li.style.backgroundColor = el
    return li
}

const getRandomNumber = () => Math.floor(Math.random() * 250)

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



function myFunction() {
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    /* Alert the copied text */
    buttonColor.innerHTML = "Copied";

  }

  