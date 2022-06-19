//Printers
function printTypingcalculator(key) {
  document.getElementById("result_h1").innerText += key;
}
function clearTypingCalculator() {
  document.getElementById("result_h1").innerText = "";
}
function printErrorMessage() {
  document.getElementById("result_h1").innerText = "Error invalid calculation";
}
function printResult(result) {
  document.getElementById("result_h1").innerText = result;
}

//Main Functions
function calculatorMain() {
  let userCal = document.getElementById("result_h1").innerText;
  let numbers = [];
  let operator = [];
  let number = "";
  for (let i = 0; i < userCal.length; i++) {
    switch (userCal[i]) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":
      case ".":
        number += userCal[i];
        break;
      default:
        if (number !== "") {
          numbers.push(number);
          number = "";
        }
        operator.push(userCal[i]);
        break;
    }
    if (i == userCal.length - 1) {
      switch (userCal[i]) {
        case "+":
        case "-":
        case ":":
        case "X":
          break;
        default:
          numbers.push(number);
          number = "";
      }
    }
  }
  if (checkNumbersArray(numbers) && operator.length < numbers.length) {
    printResult(getResultFromNumbersAndOperators(numbers, operator));
  } else {
    printErrorMessage();
  }
}
function getResultFromNumbersAndOperators(numbers, operators) {
  let result = +numbers[0];
  for (let i = 0; i < operators.length; i++) {
    result = getcalculation(result, +numbers[i + 1], operators[i]);
  }
  return result;
}
function getcalculation(num1, num2, operator) {
  let result;
  switch (operator) {
    case "+":
      result = getAdd(num1, num2);
      break;
    case "-":
      result = getSub(num1, num2);
      break;
    case "X":
      result = getMul(num1, num2);
      break;
    case ":":
      result = getDiv(num1, num2);
      break;
    default:
      break;
  }
  return result;
}

//Math Functions
function getAdd(num1, num2) {
  return num1 + num2;
}
function getSub(num1, num2) {
  return num1 - num2;
}
function getMul(num1, num2) {
  return num1 * num2;
}
function getDiv(num1, num2) {
  return num1 / num2;
}

//validation Functions
function isValidNumber(number) {
  let regexForNumber = /[.]/g;
  let mycheck = number.match(regexForNumber);
  if (mycheck === null) {
    return true;
  }
  if (mycheck.length < 2) {
    return true;
  }
  return false;
}
function checkNumbersArray(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (!isValidNumber(numbers[i])) {
      return false;
    }
  }
  return true;
}
