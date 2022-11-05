const container = document.getElementsByClassName('container');
let firstNumber = '';
let secondNumber = '';
let currentOperator = '';
let operatorChosen = false;
const firstScreen= document.querySelector('.firstScreen');
const secondScreen = document.querySelector('.secondScreen');

//The math Functions
function add(a, b){
    return a+b;
    }
    
function substract(a, b){
    return a-b;
    }
function multiply(a, b){
    return a*b;
    }
function divide(a, b){
    return a/b;
    }
    
function operate(operator, a, b) {
        a = Number(a)
        b = Number(b)

        switch (operator) {
          case '+':
            return add(a, b)
          case '-':
            return substract(a, b)
          case 'x':
            return multiply(a, b)
          case '/':
            if (b === 0) return 'undefined'
            else return divide(a, b)
          default:
            return null
        }
      }
    
    

//This creates the items for the calculator
// I use an array to create a div for each type of number and operator.
array = [0,1,2,3,4,5,6,7,8,9, '+' , 'x', '/', '-', '=', 'clear', 'delete']
for(i in array){
    var calcItem = document.createElement('div');
    calcItem.className = 'calc-item'
    if(array[i] == '='){
    calcItem.id= 'equal'
    calcItem.textContent = array[i];
    calcItem.classList.add('equal');
    }
    else if(array[i]>=0){
    calcItem.id= i
    calcItem.textContent = i;
    calcItem.classList.add('number');

    }
    else if(array[i] == 'clear' || array[i] == 'delete'){
    calcItem.id= array[i];
    calcItem.textContent=array[i];
    calcItem.classList.add(array[i]);
    }
    else{
    calcItem.id= array[i];
    calcItem.textContent=array[i];
    calcItem.classList.add('operator');
    }
    container[0].appendChild(calcItem); 
}
const numberButtons = document.querySelectorAll('.number');

if(operatorChosen == false){
numberButtons.forEach((number) =>{
number.addEventListener(('click'), function(){
  if(firstScreen.textContent.includes("=")){
    secondScreen.textContent = '';
    firstScreen.textContent = '';
  }
  secondScreen.textContent += this.id;
  firstScreen.textContent +=this.id
})
});
}

const operators = document.querySelectorAll('.operator');
operators.forEach((operator) =>{
  operator.addEventListener(('click'), function(){
    if(firstScreen.textContent.includes("=")){
      firstScreen.textContent = ''
      firstScreen.textContent += firstNumber
    }
  firstNumber = secondScreen.textContent;
  currentOperator = this.id;
  if(!firstScreen.textContent.includes('+' , '-', 'x' , '/')){
    firstScreen.textContent += this.id;
  }
  
  console.log(currentOperator)
  operatorChosen = true;
  console.log(firstNumber);
  console.log(operatorChosen);
  secondScreen.textContent='';
  })
  });

 

const equals= document.querySelector('.equal');
equals.addEventListener(('click'), function(){
  firstScreen.textContent += this.textContent;
  secondNumber = secondScreen.textContent; 
  secondScreen.textContent = operate(currentOperator, firstNumber, secondNumber)
  currentOperator = ''
  firstScreen.textContent += secondScreen.textContent;
  firstNumber = secondScreen.textContent;

})

const clear= document.querySelector('.clear');
clear.addEventListener(('click') , function(){
  firstScreen.textContent =''
  secondScreen.textContent = ''
  operatorChosen = false;
})

const del = document.querySelector('.delete');
del.addEventListener(('click'), function(){
  let str = firstScreen.textContent;
  secondScreen.textContent = secondScreen.textContent.slice(0, -1);
  if(firstScreen.textContent.includes(secondScreen.textContent)){
    firstScreen.textContent =firstScreen.textContent.slice(0, -1);
  }
  
})

