const firstNum = document.querySelector("#firstNumber");
const secondNum = document.querySelector("#secondNumber");
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const buttons = document.querySelector("#buttons");
let operator;
let result;
let resultLine;

function renderDOM(e) {
    //Rensar resultat i DOM.
    if (operator) {
    operator.remove();
    resultLine.remove();
    }

    //Visar symbolen mellan de två nummer.
    operator = document.createElement("span");
    operator.innerText = e.currentTarget.textContent;
    firstNum.insertAdjacentElement("afterend", operator);

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
        //Kollar om det redan har felmeddelandet.
        if (!document.querySelector(".error-message-subtract")) {
        let p = document.createElement("p");
        buttons.insertAdjacentElement("afterend", p);
        p.classList.add("error-message-subtract");
        p.innerText = "Answer is a negative number. Make sure that the first number is bigger than the second.";
        }
    } else {
        renderDOM(e);
    }
})

multiplyButton.addEventListener("click", function multiply(e) {
    result = parseFloat(firstNum.value) * parseFloat(secondNum.value);
    renderDOM(e);
})