//HTML ELEMENTS
const numbers = document.querySelectorAll('.cell');
const operators = document.querySelectorAll('.operator');
const specials = document.querySelectorAll('.special');
const display =document.querySelector('.display');
const calculate=document.querySelector('.calculate');
const history =document.querySelector('.history');

let a = '';
let update =[' ,'];
let b = '';

//function to handle click of  numbers and display them

const handleCellClick = (e) => {

    if(e.target.classList[1]=== 'CE'){
    a = '';}
    else if(e.target.classList[1]=== 'C'){
        a = a.toString()
        a = a.slice(0,-1);    }
    else if(e.target.classList[0]=== 'calculate'){
        
        historyupdate(a);

    }
    else{
    a = a + e.target.classList[1] ;
      }

      display.innerHTML = a;
}

//function to update history


const historyupdate =(value) =>{
    update[(update.length+1)] = a;
    if(update.length > 6){ update = []}
    history.innerHTML = update ;
    a = eval(a);
    display.innerHTML = a;
}
//loop to check clicks
for (const number of numbers){
    number.addEventListener('click',handleCellClick);
    } 

for (const operator of operators){
    operator.addEventListener('click',handleCellClick);
        }
    
 for (const special of specials){
    special.addEventListener('click',handleCellClick);
        }

calculate.addEventListener('click',handleCellClick);