const container = document.getElementsByClassName('container');
let firstNumber = '';
let secondNumber = '';
let currentOperator = null;

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
            if (b === 0) return null
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
console.log(numberButtons);
numberButtons.forEach((number) =>{
number.addEventListener(('click'), function(){
    firstNumber = this.id;
})
});

const operators = document.querySelectorAll('.operator');
console.log(operators);


