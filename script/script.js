let input = document.querySelector('input');
let button = document.querySelector('button');
let span = document.querySelector('span')

button.addEventListener('click', () =>{
    span.innerText = input.value * 365 + " days" //calculation
})
