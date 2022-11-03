const container = document.getElementsByClassName('container');
let firstNumber = '';
let secondNumber = '';
let currentOperator = '';
let operatorChosen = false;
const screen = document.querySelector('.screen');

//The math Functions
function add(a, b){
    return a+b;
    }
    
function subtract(a, b){
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

if(operatorChosen == false){
const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach((number) =>{
number.addEventListener(('click'), function(){
    screen.textContent += this.id;
})
});
}

const operators = document.querySelectorAll('.operator');
operators.forEach((operator) =>{
  operator.addEventListener(('click'), function(){
  firstNumber = screen.textContent;
  currentOperator = this.id;
  console.log(currentOperator)
  operatorChosen = true;
  console.log(firstNumber);
  console.log(operatorChosen);
  screen.textContent='';
   getSecondNumber();
  })
  });

  function getSecondNumber(){
  if(operatorChosen){
    screen.textContent = ''
    numberButtons.forEach((number) =>{
      number.addEventListener(('click'), function(){
          screen.textContent += this.id 
      },)
      });
  }
}

const equals= document.querySelector('.equal');
equals.addEventListener(('click'), function(){
  secondNumber = screen.textContent; 
  screen.textContent = operate(currentOperator, firstNumber, secondNumber)
})

const clear= document.querySelector('.clear');
clear.addEventListener(('click') , function(){
  screen.textContent = ''
  operatorChosen = false;
})

const del = document.querySelector('.delete');
del.addEventListener(('click'), function(){
screen.textContent= screen.textContent.slice(0, -1);

})

