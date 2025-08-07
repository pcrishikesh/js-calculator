let num1="";
let operator="";
let num2="";

document.querySelectorAll('.num').forEach(e => {
    e.addEventListener('click', ()=> {
        if (!operator) {
            num1 += e.textContent
            console.log("num1",num1);
        }else {
            num2 += e.textContent
            console.log("num2",num2);
        }

    })
})

document.querySelectorAll('.operator').forEach(e => {
    e.addEventListener('click',()=> {
        if (num1) {
            operator = e.textContent
            console.log("ope",operator);
    }
    })
})

