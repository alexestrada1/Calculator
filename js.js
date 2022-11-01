const container = document.getElementsByClassName('container');

//This creates the items for the calculator
// I use an array to create a div for each type of number and operator.
array = [0,1,2,3,4,5,6,7,8,9, '+' , 'x', '/', '-', '=', 'clear', 'delete']
for(i in array){
    var calcItem = document.createElement('div');
    calcItem.className = 'calc-item'

    if(array[i]>=0){
    calcItem.id= i
    calcItem.textContent = i;
    }
    else{
    calcItem.id= array[i];
    calcItem.textContent=array[i];
    }
    container[0].appendChild(calcItem); 
}
