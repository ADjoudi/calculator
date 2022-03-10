const operators = ['+','-','*','/'];
const operands = [1,2,3,4,5,6,7,8,9,0];
let equation = [];
let regulator = 0;

const outputBox = document.querySelector('.box');
const updateEquation = ()=>{
    outputBox.querySelector('.operation').textContent = equation.join(' ');
};

const checkMistakes = (array) =>{
    for(let i = 0; i < array.length - 1; i++){
        if(operators.find(element => element == array[i]) && array[i+1] == 0){
            outputResult("ERROR DIVISION BY 0");
            return true;
        }
        if(operators.find(element => element == array[array.length-1])){
            outputResult("ERROR");
            return true;
        }
    }
    return false;
};
const calculateResult = (array) =>{
    let res = 0;
    for(let i = 1; i < array.length; i= i + 2){
        switch(array[i]){
            case '+':
                res = parseInt(array[i-1]) + parseInt(array[i+1]);
                break;
            case '-':
                res = parseInt(array[i-1]) - parseInt(array[i+1]);
                break;
            case '*':
                res = parseInt(array[i-1]) * parseInt(array[i+1]);
                break;
            case '/':
                res = parseInt(array[i-1]) / parseInt(array[i+1]);
                break;
            default:
        }
    }
    return res;
};
const outputResult = (output) =>{
    outputBox.querySelector('.result').textContent = output;
};
const clearEquation = () =>{
    equation = [];
    outputBox.querySelector('.operation').textContent = '';
};

const btns = document.querySelectorAll('.insideBtn');
btns.forEach((btn)=>{
    // visual effects
    btn.addEventListener('mousedown', (e)=>{
        btn.classList.toggle('click');
        setTimeout(() => {
            btn.classList.toggle('click');
        }, 200);
    });
    btn.addEventListener('mouseover', (e)=>{
        e.target.style.cursor = 'pointer';
    });
    
    // processing input
    btn.addEventListener('click' , ()=>{
        let input = String(btn.querySelector('span').textContent);
        switch(input){
            case '=':
                if(!checkMistakes(equation)){
                    let result = calculateResult(equation);
                    outputResult(result);
                    clearEquation();
                }
                break;
            case 'Del':
                    equation.pop();
                    updateEquation();
                    break;
            default:
                if(equation.length == 0){
                    if(operators.find(element => element == input)){
                        outputResult('ERROR');
                    }
                    if(operands.find(element => element == input) >= 0){
                        equation.push(input);
                    }
                }else{ 
                    if((regulator == 0) && (operators.find(element => element == input))){
                        equation.push(input);
                        regulator++;
                    }else if((regulator == 1) && (operators.find(element => element == input))){
                        equation.pop();
                        equation.push(input);
                      
                    }else if((regulator == 0) && (operands.find(element => element == input) >=0)){
                        equation[equation.length - 1] = String(equation[equation.length - 1]) + String(input);
                        
                    }else if((regulator == 1) && (operands.find(element => element == input) >=0)){
                        equation.push(input);
                        regulator--;
                    }
                }
                
                updateEquation();
        }
        
    });

});


