const display = document.getElementsByClassName("calculator__display")[0]
const calculator = document.getElementsByClassName("calculator")[0]
const keys = document.getElementsByClassName("calculator__keys")[0]

function init_consts() {
    localStorage.setItem("3.14159265359","π")
    localStorage.setItem("3.14159265359","Pi")
    localStorage.setItem("299792458","c")
    localStorage.setItem("2.71828","e")
    console.log("Consts Initialised")
}

function calculate(expression) {
    let result = '';
    for (let letter of expression) {
        if (letter === "×") {
            result += " * "
        } else if (letter === "÷") {
            result += " / "
        } else if (letter === "^") {
            result += " ** "
        } else {
            result += letter; 
        }
        
    }
    
    try {
       return eval(expression);
        //try and evaluate the expression contained in display.textContent
    } catch (err) {
        if (err instanceof SyntaxError) {
            return "Syntax Error"
            //if the error is a syntax error, print that on screen
        } else {
            return "Error"
        }
    }
}

keys.addEventListener("click", e => {
    if (e.target.matches("button")) {
    //when a key is clicked and is a button perform the following function
        const key = e.target
        const action = key.dataset.action
        const keyText = key.textContent
        if (!action) {
            if(display.textContent === "0"){display.textContent = ""}
            display.textContent += keyText;
            //if the action data field of the button is undefined (it is a number key) append the number of key pressed to the display or if there is only a 0 on the display then remove that first
        } else if (
            action === 'add'
        ) {
            display.textContent += "+";
        } else if 
        (
            action === 'subtract'
        ) {
            display.textContent += "-";
        } else if (
            action === 'multiply'
        ) {
            display.textContent += "×";
        } else if (
            action === 'divide'
        ) {
            display.textContent += "÷";
        } else if (
            action === 'clear'
        ) {
            display.textContent = "0";
        } else if (
            action === 'decimal'
        ) {
            display.textContent += ".";
        } else if (
            action === 'exponent'
        ) {
            display.textContent += "^";
        } else if (
            action === 'store'
        ) {
            document.getElementsByClassName("store")[0].style.display = "block";
        } else if (
            action === 'calculate'
        ) {
            console.log(calculate(display.textContent))
            display.textContent = calculate(display.textContent)
        }
            
        }
    })

function store(event,value,name){
    localStorage.setItem(value,name);
    console.log("Stored " + name + " as " + value);
}
function recall(event, name){
    let x =  localStorage.getItem(name);
    if (x === null || x === undefined || x === false){
        console.log("Recalled of " + name + "  failed");
    } else {
        display.textContent += localStorage.getItem(name);
        console.log("Recalled " + name);
    }
}