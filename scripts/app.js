let input = "";
const forbiddenOperators = ["*", "/", "+"]
const operators = ["*", "/", "+", "-"]

function handleClick(key) {
    let isOperatorKey = operators.includes(key);
    let hasOperatorAtTheEnd = operators.includes(input[input.length - 1]);

    // CASE 1- Başta "-" haricinde işleme basmaması gerekiyor.
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

    // CASE 2 - Arka arkaya işlem tuşlarına basmasın
    // input değişkeninin son karakteri ile girilen key operatörlerden olmamalı
    let hasCase2 = isOperatorKey && hasOperatorAtTheEnd
    if (hasCase2) {
        let message = "4 işlem öğren arkadaş!";
        document.getElementById("display").value = message;
        setTimeout( () => {
            document.getElementById("display").value = input;
        }, 1000);
        return;
    }

    // Girilen değerleri tek bir stringe dönüştür
    input += key;
    // input = input + key; // Yukarıdaki ile aynı
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
        let message = "4 işlem öğren arkadaş!";
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


// EVAL("string")
// içerisindeki stringi matematiksel bir işleme dönüştürmeye yarıyor. 
// bu işlemin sonucunu yazıdırıyor.

let myString = "3/3";
console.log("myString:" + myString);
console.log("sonuc: " + eval(myString));