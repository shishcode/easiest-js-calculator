let input = "";
const forbiddenOperators = ["*", "/", "+"]
const operators = ["*", "/", "+", "-"]

function handleClick(key) {
    let isOperatorKey = operators.includes(key);
    let hasOperatorAtTheEnd = operators.includes(input[input.length - 1]);

    // CASE 1- The user should not be allowed to press operator signs except "-".
    let hasOperatorsAtFirst2 = forbiddenOperators.includes(key) && input === ""
    // let hasOperatorsAtFirst = (key === "*" || key === "/" || key === "+") && input === ""
    
    if (hasOperatorsAtFirst2) {
        input = "Başta Rakam Lazım!";
        document.getElementById("display").value = input;
        input = "";
        setTimeout( () => {
            document.getElementById("display").value = input;
        }, 1000); 
        return;
    }

    // CASE 2 - The user should not be allowed to press operator signs subsequently
    // the last character of input variable must be different from the entered operator key.
    let hasCase2 = isOperatorKey && hasOperatorAtTheEnd
    if (hasCase2) {
        let message = "Subsequent operators!";
        document.getElementById("display").value = message;
        setTimeout( () => {
            document.getElementById("display").value = input;
        }, 1000);
        return;
    }
    
    // CALCULATION IN ACTION
    // combine the entires into a single string
    input += key;
    
    // display the input variable on the screen
    document.getElementById("display").value = input;
}

function clearInput() {
    input = "";
    document.getElementById("display").value = input;
}

function backspace() {
    input = input.substring(0, input.length - 1);
    document.querySelector("#display").value = input;
}

function findResult() {
    let hasOperatorAtTheEnd = operators.includes(input[input.length - 1]);

    if(hasOperatorAtTheEnd) {
        let message = "Has an operator at the end!";
        document.getElementById("display").value = message;
        setTimeout( () => {
            document.getElementById("display").value = input;
        }, 1000);
        return;
    }
    let result = eval(input);
    document.getElementById("display").value = result;
    input = "";
}

// HOW EVAL WORK?
// EVAL("string") : evaluates the string and turns it into a mathematical query and prints the result. 
// let myString = "3/3";
// console.log("myString:" + myString);
// console.log("sonuc: " + eval(myString));
