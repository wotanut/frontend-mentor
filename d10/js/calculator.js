//Put your code here
let number1 = document.getElementById('num1');
let number2 = document.getElementById('num2');
let add = document.getElementById('add');
let subtract = document.getElementById('subtract');
let divide = document.getElementById('divide');
let multiply = document.getElementById('multiply');
let clear = document.getElementById('clear');
let result = document.getElementById('result');

add.addEventListener("click" ,function(e) {
    let output = Number(number1.value) + Number(number2.value)
    console.log(output)
    result.textContent = "Result: " + output
})

subtract.addEventListener("click" ,function(e) {
    let output = Number(number1.value) - Number(number2.value)
    console.log(output)
    result.textContent = "Result: " + output
})

multiply.addEventListener("click" ,function(e) {
    let output = Number(number1.value) * Number(number2.value)
    console.log(output)
    result.textContent = "Result: " + output
})

divide.addEventListener("click" ,function(e) {
    let output = Number(number1.value) / Number(number2.value)
    console.log(output)
    result.textContent = "Result: " + output
})

clear.addEventListener("click" ,function(e) {
    console.log(number1.TEXT_NODE)
    number1.value = ""
    number2.value = ""
    result.textContent = "Result:"
})