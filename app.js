const firstNum = document.querySelector("#firstNumber");
const secondNum = document.querySelector("#secondNumber");
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const buttons = document.querySelector("#buttons");
let result;
let operand;
let resultLine;
let hej
let test

function renderDOM(e) {
    //Rensar resultat i DOM.
    if (operand) {
    operand.remove();
    resultLine.remove();
    }

    //Visar symbolen mellan de två nummer.
    operand = document.createElement("span");
    switch (e.currentTarget) {
        case addButton:
            operand.innerText = e.currentTarget.textContent;
            break;
        case subtractButton:
            operand.innerText = e.currentTarget.textContent;
            break;
        case multiplyButton:
            operand.innerText = e.currentTarget.textContent;
            break;
    }
    firstNum.insertAdjacentElement("afterend", operand);

    //Visar resultatet.
    resultLine = document.createElement("span");
    resultLine.innerText = `= ${result}`;
    secondNum.insertAdjacentElement("afterend", resultLine);
}

addButton.addEventListener("click", function add(e) {
    result = parseFloat(firstNum.value) + parseFloat(secondNum.value);
    renderDOM(e);
})

subtractButton.addEventListener("click", function subtract(e) {
    result = parseFloat(firstNum.value) - parseFloat(secondNum.value);
    if (result < 0) {
        let p = document.createElement("p");
        buttons.insertAdjacentElement("afterend", p);
        p.innerText = "Answer is a negative number. Make sure that the first number is bigger than the second.";
    } else {
        renderDOM(e);
    }
})

multiplyButton.addEventListener("click", function multiply(e) {
    result = parseFloat(firstNum.value) * parseFloat(secondNum.value);
    renderDOM(e);
})