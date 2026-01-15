let num1 = "";
let operatorvalue = "";
let num2 = "";
let result = "";

let textbox = document.querySelector('.textbox')

document.querySelectorAll('.num').forEach(e => {
    e.addEventListener('click', () => {
        if (!operatorvalue) {
            num1 += e.textContent
            textbox.value = num1
        } else {
            num2 += e.textContent
            textbox.value = num2
            console.log(operatorvalue);
        }

    })
})

document.querySelectorAll('.operator').forEach(e => {
    e.addEventListener('click', () => {
        if (num1) {
            operatorvalue = e.textContent
            textbox.value = operatorvalue
            if (operatorvalue != "")
                operatorvalue = e.textContent
        }

    })
})


function operate(fnumber, operator, snumber) {
    if (operator == "+") {
        result = add(fnumber, snumber)
    }
    else if (operator == "-") {
        result = subtract(fnumber, snumber)
    }
    else if (operator == "*") {
        result = multiply(fnumber, snumber)
    }
    else if (operator == "") {
        result = divide(fnumber, snumber)
    }
    else {
        result = alert("wrong input");
    }
}

function equate() {
    let equatorbtn = document.querySelector('.equate')
    equatorbtn.addEventListener('click', () => {
        if (num1 === "" || num2 === "" || operatorvalue === "") {
            alert("give correct input")
        } else {
            operate(parseInt(num1), operatorvalue, parseInt(num2))
            console.log(result);

            document.querySelectorAll('.operator').forEach(e => {
                e.addEventListener('click', () => {
                    if (num1) {
                        operatorvalue = e.textContent
                        textbox.value = operatorvalue
                        num1 = result
                        if (num1 == result) {
                            num2 = ""
                        }
                    }
                })
            })
            console.log(`result ${num1}`)
            textbox.value = result
        }
    })

}

equate()
clear()

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function clear() {
    /* 
let num1 = "";
let operatorvalue = "";
let num2 = "";
let result = "";
    */

    document.querySelectorAll('.clear').forEach(e => {
        e.addEventListener('click', () => {
            num1 = ""
            num2 = ""
            operatorvalue = ""
            result = ""
            textbox.value = ""
        })
    })
}