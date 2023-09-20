/**@description:  Creates an array that stores the colors, whenever the button is clicked it will cycle through the array and randomly change the colors on the user's screen.*/

const colors = ['red', 'blue', 'yellow', 'purple', 'green', 'black'];
const btn = document.getElementById('btn');
//const color = document.querySelector('.color');

// When clicking
btn.addEventListener('click', function(){
    var randomColors = getRandomColors();
    document.body.style.background = colors[randomColors];
    document.getElementById('colors').innerHTML = colors[randomColors];
    //color.textContent = colors[randomColors];

})

// Generate random numbers
getRandomColors = function () {
    return Math.floor(Math.random() * colors.length);
}