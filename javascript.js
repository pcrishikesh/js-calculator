let num1="";
let operatorvalue="";
let num2="";
let result = "";

let textbox = document.querySelector('.textbox')

document.querySelectorAll('.num').forEach(e => {
    e.addEventListener('click', ()=> {
        if (!operatorvalue) {
            num1 += e.textContent
            textbox.value = num1
        }else {
            num2 += e.textContent
            textbox.value = num2
            console.log(operatorvalue);
        }

    })
})

document.querySelectorAll('.operator').forEach(e => {
    e.addEventListener('click',()=> {
        if (num1) {
            operatorvalue = e.textContent
            textbox.value = operatorvalue
            if (operatorvalue!="")
                operatorvalue = e.textContent            
    }

    })
})


function operate(fnumber, operator, snumber) {
    if (operator == "+") {
        result = add(fnumber,snumber)
    }
    else if(operate=="-") {
        result = subtract(fnumber,snumber)
    }
    else if(operate=="*") {
        result =  multiply(fnumber,snumber)
    }
    else if(operate=="*") {
        result = divide(fnumber,snumber)
    }
    else {
        result = alert("wrong input");
    }
}

function equate() {
    let equatorbtn = document.querySelector('.equate')
    equatorbtn.addEventListener('click', ()=> {
        if (num1==="" || num2 === "" || operatorvalue === "") {
            alert("give correct input")
        }else {
            operate(parseInt(num1),operatorvalue,parseInt(num2))
            console.log(result);
            
        }
    })
}

equate()


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