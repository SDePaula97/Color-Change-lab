//  Create A Function (generate)
// Function should get a random color from the COLORS_ARRAY
//Create a li element
// Add the color name to the li text
// Set the background color of the li to the random color
// Append the li to the ul

// const ul = document.querySelector('#color-list')
// const body = document.querySelector('#body')
// let colorGenBtn=document.getElementById('generate-color');
// let resetBtn = document.getElementById('reset-btn');
// const COLORS_ARRAY = [
//   "red",
//   "yellow",
//   "magenta",
//   "cyan",
//   "blue",
//   "black",
//   "gray",
//   "teal",
//   "green",
//   "purple",
//   "violet",
// ];
 
// const getRandom = () =>  Math.floor(Math.random() * COLORS_ARRAY.length)


// const colorMe = () => {
// const newLi = document.createElement('li')
// newLi.style.backgroundColor = getRandom();

// ul.appendChild(li)

// }
// colorGenBtn.addEventListener("click", colorMe());

// const reset = () => {
//   ul.remove(li)
//   newLi.style.backgroundColor = 'white';

// }

// resetBtn.addEventListener("click", reset());


const ul = document.getElementById('color-list')
const button = document.getElementById('generate-color')
const button2 = document.getElementById('reset')
const body = document.querySelector('body')

const COLORS_ARRAY = ["red", "yellow", "magenta", "cyan", "blue", "black", "gray", "teal", "green", "purple", "violet"];

button.addEventListener('click', generate)
button2.addEventListener('click', reset)

function generate(){
    const randomColor = COLORS_ARRAY[Math.floor(Math.random() * COLORS_ARRAY.length)] //Here I indexed the array with math.random so that I can get a random index position
    const li = document.createElement('li') //creating an li element
    li.textContent = randomColor //adding random text thats coming from the randomcolor variable
    ul.appendChild(li) //adding the child(li) to the parent(ul)
    body.style.backgroundColor = randomColor //styling the background with a randomColor variable
  }

  function reset(){
    const children = ul.querySelectorAll('li') //Getting all the children inside of the ul
    body.style.backgroundColor = 'white' //setting the background color to white
    const list = Array.from(children) //turning the nodelist into an array for javascript so we can use the array functions like map(), filter, reduce...etc
    list.map(list => list.remove())//using the map function to loop through the list and on each item remove it
  }

