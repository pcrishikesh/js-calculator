let num1="";
let operatorvalue="";
let num2="";

let textbox = document.querySelector('.textbox')

document.querySelectorAll('.num').forEach(e => {
    e.addEventListener('click', ()=> {
        if (!operatorvalue) {
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
            operatorvalue = e.textContent
            textbox.value = operatorvalue            
    }

    })
})


function operate(fnumber, operator, snumber) {
    if (operator == "+") {
        add(fnumber,snumber)
    }
    else if(operate=="-") {
        subtract(fnumber,snumber)
    }
    else if(operate=="*") {
        multiply(fnumber,snumber)
    }
    else if(operate=="*") {
        divide(fnumber,snumber)
    }
    else {
        alert("wrong input");
    }
}


function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function divide(a,b) {
    return a / b;
}

function multiply() {
    return a * b;
}