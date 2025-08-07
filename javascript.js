let num1="";
let operator="";
let num2="";

let textbox = document.querySelector('.textbox')

document.querySelectorAll('.num').forEach(e => {
    e.addEventListener('click', ()=> {
        if (!operator) {
            num1 += e.textContent
            textbox.value = num1
        }else {
            num2 += e.textContent
            textbox.value = num2
        }

    })
})

document.querySelectorAll('.operator').forEach(e => {
    e.addEventListener('click',()=> {
        if (num1) {
            operator = e.textContent
            textbox.value = operator
    }
    })
})


