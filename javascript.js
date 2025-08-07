let buttons = document.querySelectorAll('.buttons')
let num1;
let operator;
let num2;
let num;

buttons.forEach(e => {
    e.addEventListener('click', (element)=> {
        num = element.target.innerHTML

    })
})

