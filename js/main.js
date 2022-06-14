const display = document.getElementsByClassName("calculator__display")[0]
const calculator = document.getElementsByClassName("calculator")[0]
const keys = document.getElementsByClassName("calculator__keys")[0]

function calculate(expression) {
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
            display.textContent += keyText
            //if the action data field of the button is undefined (it is a number key) append the number of key pressed to the display or if there is only a 0 on the display then remove that first
        } else if (
            action === 'add'
        ) {
            display.textContent += "+"
        } else if 
        (
            action === 'subtract'
        ) {
            display.textContent += "-"
        } else if (
            action === 'multiply'
        ) {
            display.textContent += "*"
        } else if (
            action === 'divide'
        ) {
            display.textContent += "/"
        } else if (
            action === 'clear'
        ) {
            display.textContent = "0"
        } else if (
            action === 'decimal'
        ) {
            display.textContent += "."
        } else if (
            action === 'exponent'
        ) {
            display.textContent += "**"
        } else if (
            action === 'store'
        ) {
            document.getElementsByClassName("store")[0].style.display = "block";
        } else if (
            action === 'calculate'
        ) {
            display.textContent = calculate(display.textContent)
        }
            
        }
    })

function store(value,name){
    localStorage.setItem(name,value);
    console.log("Stored " + name + " as " + value);
}
