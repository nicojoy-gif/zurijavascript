//Program to build basic calculator in javascript
const operator = prompt('Enter an operator to perform the calculator(either +, -, * or /)');
const num1 = parseFloat(prompt('Enter the first number'));
const num2 = parseFloat(prompt('Enter the second number'));
let result;

//conditions for the calculation
if(operator == '+'){
   console.log(result = num1 + num2);
}
else if (operator == '-') {
    console.log(result = num1 - num2);
}
else if(operator == '*'){
    console.log(result = num1 * num2);
}
else{
    console.log(result = num1 / num2);
}


window.alert("Result is:" + result);