const display = document.getElementsByClassName("calculator__display")[0]
const calculator = document.getElementsByClassName("calculator")[0]
const keys = document.getElementsByClassName("calculator__keys")[0]


void function onclick(type) {
    console.log(type)
}

function calculate(expression) {
    let result = '';
    for (let letter of expression) {
        if (letter === "×") {
            result += " * "
        } else if (letter === "÷") {
            result += "/"
        } else if (letter === "^") {
            result += "**"
        } else {
            result += letter; 
        }
        
    }
    
    try {
       return eval(result);
    } catch (err) {
        if (err instanceof SyntaxError) {
            return "Syntax Error"
        } else {
            return "Error"
        }
    }
}

keys.addEventListener("click", e => {
    if (e.target.matches("button")) {
        const key = e.target
        const action = key.dataset.action
        const keyText = key.textContent
        if (!action) {
            if(display.textContent === "0"){display.textContent = ""}
            display.textContent += keyText;
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

function store(value,name){
    localStorage.setItem(name,value);
    console.log("Stored " + name + " as " + value);
}

function recall(name){
    localStorage.getItem(name);
    console.log("Recalled " + name);
}