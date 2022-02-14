//const num = document.getElementsByClassName("num-btn").addEventListener("click", displayNum);
//console.log(num);
let input ='';
let previousInput = '';
let operator;
let previousOperator = '';
let displayNum;
let calc = '';
let previousCalc = '';

function numInput(num){
    if (previousInput.length == 0){
        document.getElementById("previous-input").textContent = ""
        return display(num);
        
    }
        return display(num);
};

function calculate(op){

    previousOperator = operator;
    operator = op;
    
    console.log("operator " + operator)
    console.log("previousOperator " + previousOperator)
    console.log("previousInput " + previousInput.length)

    if (operator != previousOperator && previousCalc != ''){
        if (previousOperator == '+'){
            calculateAdd();
        } else if (previousOperator == '-'){
            calculateMinus();
        }
    } else if (operator == '+'){
        if (previousInput.length > 0){
        return calculateAdd();
        }
        document.getElementById("previous-input").textContent = input.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " " + operator;
        previousInput = input;    
        input = '';
    } else if (operator == '-'){
        if (previousInput.length > 0){
        return calculateMinus();
        }
        document.getElementById("previous-input").textContent = input.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " " + operator;
        previousInput = input;    
        input = '';
    }
}

/*function plus(){
    operator = '+';
    //console.log("input" + input)

    if (previousInput.length > 0){
        return calculateAdd();
    }
    
    document.getElementById("previous-input").textContent = input.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " " + operator;
    previousInput = input;    
    //console.log("prev " + previousInput);
    
    input = '';
}*/    


function reset(){
    document.getElementById("display").textContent = "";
    document.getElementById("previous-input").textContent = "";
    input = '';
    previousInput = '';
    calc = '';
    previousCalc = '';
    previousOperator = '';
    operator = '';

}

function equals(){
    console.log("previousInput " + previousInput);
    console.log("input " + input);
    console.log("calc " + calc);
    previousCalc = calc;
    console.log("operator " + operator);
    console.log(calc.length);
    

    if (operator == '+'){
        if (calc.length == 0){
        calc = parseInt(previousInput) + parseInt(input);
        calc = calc.toString();
        document.getElementById("display").textContent = calc.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById("previous-input").textContent = previousInput.replace(/\B(?=(\d{3})+(?!\d))/g, ",")  + " " + operator + " " + input + " =";
        //input = '';
        //previousInput = '';
        } else if (calc.length > 0){
        calc = parseInt(calc) + parseInt(input);
        calc = calc.toString();
        document.getElementById("display").textContent = calc.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById("previous-input").textContent = previousCalc.replace(/\B(?=(\d{3})+(?!\d))/g, ",")  + " " + operator + " " + input + " =";
        //input = '';
        //previousInput = '';
    }
    } if (operator == '-'){
        if (calc.length == 0){
        calc = parseInt(previousInput) - parseInt(input);
        calc = calc.toString();
        document.getElementById("display").textContent = calc.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById("previous-input").textContent = previousInput.replace(/\B(?=(\d{3})+(?!\d))/g, ",")  + " " + operator + " " + input + " =";
         //input = '';
        //previousInput = '';
        } else if (calc.length > 0){
        calc = parseInt(calc) - parseInt(input);
        calc = calc.toString();
        document.getElementById("display").textContent = calc.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById("previous-input").textContent = previousCalc.replace(/\B(?=(\d{3})+(?!\d))/g, ",")  + " " + operator + " " + input + " =";
        //input = '';
        //previousInput = '';
            }
        }
}

function calculateAdd(){

    if (calc.length == 0){
        calc = parseInt(previousInput) + parseInt(input);
        calc = calc.toString();

        document.getElementById("display").textContent = calc.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById("previous-input").textContent = calc.replace(/\B(?=(\d{3})+(?!\d))/g, ",")  + " " + operator;
        input = '';
        //operator = '';  
    } else if (calc.length > 0){
        calc = parseInt(calc) + parseInt(input);
        calc = calc.toString();

        document.getElementById("display").textContent = calc.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById("previous-input").textContent = calc.replace(/\B(?=(\d{3})+(?!\d))/g, ",")  + " " + operator;
        input = '';
        //operator = '';
    }
    //return display(calc);
}

function calculateMinus(){

    console.log(previousInput);
    console.log(input);
    console.log(calc.length);
    console.log(operator);

    if (calc.length == 0){
        calc = parseInt(previousInput) - parseInt(input);
        calc = calc.toString();

        document.getElementById("display").textContent = calc.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById("previous-input").textContent = calc.replace(/\B(?=(\d{3})+(?!\d))/g, ",")  + " " + operator;
        input = '';
        //operator = '';  
    } else if (calc.length > 0){
        calc = parseInt(calc) - parseInt(input);
        calc = calc.toString();

        document.getElementById("display").textContent = calc.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById("previous-input").textContent = calc.replace(/\B(?=(\d{3})+(?!\d))/g, ",")  + " " + operator;
        input = '';
        //operator = '';
    }
    //return display(calc);
}

function display(num){
    
    //console.log("length " + input.length);

    if (input == '' ){
        input = num.toString();
        //console.log(input);
        document.getElementById("display").textContent = input;
    } else if (input == 0){
        document.getElementById("display").textContent = input;
    } else if (input.length <= 20){
        input += num.toString();

        //console.log(input);
        document.getElementById("display").textContent = input.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
};

