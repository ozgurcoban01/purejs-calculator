const numberButtons = document.querySelectorAll(".number");
const opperandButtons = document.querySelectorAll(".opperand");
const upperDisplay = document.querySelector(".upper-display");
const lowerDisplay = document.querySelector(".lower-display");
const allClearButton = document.querySelector(".all-clear");
const dotButton = document.querySelector(".dot");
const equalButton = document.querySelector(".equal");
const themeChangeButton = document.querySelector(".theme-button");
const allButtons = document.querySelectorAll("button");

const dotChecker = 0;
var realNumber = "";
var resultNumber = null;
var currentOperand = "";
var currentNumber = null;
var previousNumber = null;
var screenResult = null;
var dotAdderTimes = 0.1;

function calculate() {
  switch (currentOperand) {
    case "*":
      screenResult = parseFloat(currentNumber) * parseFloat(realNumber);
      break;
    case "/":
      screenResult = parseFloat(currentNumber) / parseFloat(realNumber);
      break;
    case "+":
      screenResult = parseFloat(currentNumber) + parseFloat(realNumber);
      break;
    case "-":
      screenResult = parseFloat(currentNumber) - parseFloat(realNumber);
      break;
  }
}

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLowerDisplay(button.innerText);
    if (currentOperand != "") {
      calculate();
    }
    if (screenResult != null) {
      upperDisplay.innerText = screenResult;
    }
  });
});

opperandButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if(lowerDisplay.innerText==""&&upperDisplay.innerText=="") return
    switch (button.innerText) {
      case "*":
        currentOperand = "*";
        
        screenResult == null
          ? (currentNumber = realNumber)
          : (currentNumber = screenResult);
        upperDisplay.innerText = currentNumber + currentOperand;
          lowerDisplay.innerText = "";
        realNumber = "";
        break;
      case "/":
        currentOperand = "/";
        
        screenResult == null
          ? (currentNumber = realNumber)
          : (currentNumber = screenResult);
        upperDisplay.innerText = currentNumber + currentOperand;
          lowerDisplay.innerText = "";
        realNumber = "";
        break;
      case "+":
        currentOperand = "+";
        
        screenResult == null
          ? (currentNumber = realNumber)
          : (currentNumber = screenResult);
        upperDisplay.innerText = currentNumber + currentOperand;
          lowerDisplay.innerText = "";
        realNumber = "";
        break;
      case "-":
        currentOperand = "-";
        
        screenResult == null
          ? (currentNumber = realNumber)
          : (currentNumber = screenResult);
        upperDisplay.innerText = currentNumber + currentOperand;
          lowerDisplay.innerText = "";
        realNumber = "";
        break;
    }
  });
});

allClearButton.addEventListener("click", () => {
  allClear();
});

dotButton.addEventListener("click", () => {
  if (lowerDisplay.innerText.includes(",")) {
    return;
  } else if (lowerDisplay.innerText === "") {
    lowerDisplay.innerText = "0,";
  } else {
    lowerDisplay.innerText += ",";
  }
});
equalButton.addEventListener("click", () => {
  console.log("REAL: " + realNumber);
  console.log("PREV: " + previousNumber);
  console.log("CUREN: " + currentNumber);
  console.log("RESULT: " + screenResult);
});

function setLowerDisplay(number) {
  if (lowerDisplay.innerText.includes(",")) {
    realNumber = parseFloat(realNumber) + dotAdderTimes * parseInt(number);
    dotAdderTimes /= 10;
    lowerDisplay.innerText += number;
  } else {
    realNumber += number;
    var rightString = "";
    var endString = "";

    var nonThird = realNumber.slice(0, realNumber.length % 3);
    var third = realNumber.slice(realNumber.length % 3, realNumber.length);

    for (i = 0; i < third.length - 1; i += 3) {
      rightString += "." + third.slice(i, i + 3);
    }

    endString = nonThird + rightString;

    if (endString[0] === ".") {
      endString = endString.slice(1, endString.length);
    }

    lowerDisplay.innerText = endString;
  }

  // console.log(realNumber);
}

function allClear() {
  lowerDisplay.innerText = "";
  realNumber = "";
  this.dotChecker = 0;
  resultNumber = null;
  currentOperand = "";
  dotAdderTimes = 0.1;
  currentNumber = null;
  upperDisplay.innerText = "";
  screenResult=null;
}

themeChangeButton.addEventListener("click",()=>{

  allButtons.forEach((button)=>{
    button.classList.toggle("dark")
  })
  document.querySelector("body").classList.toggle("dark-backgrond")
  document.querySelector(".display").classList.toggle("dark-display")
  lowerDisplay.classList.toggle("dark-lower-display")
  themeChangeButton.classList.toggle("dark")
  if(themeChangeButton.classList.contains("dark")){
    console.log("bende dark var")
    themeChangeButton.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>'
  }else{
    themeChangeButton.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"/></svg>'
 
  }
})