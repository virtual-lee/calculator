let input ='';
let previousInput = '';
let operator;

function num0(){
    return display(0);
};

function num1(){
    return display(1);
};

function num2(){
    return display(2);
};

function num3(){
    return display(3);
};


function num4(){
    return display(4);
};

function plus(){
    operator = '+';
    console.log("input" + input)

    if (previousInput.length > 0){
        return calculateAdd();
    }
    
    document.getElementById("previous-input").textContent = input.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " " + operator;
    previousInput = input;    
    console.log("prev " + previousInput);
    
    input = '';
}    


function reset(){
    document.getElementById("display").textContent = "";
    document.getElementById("previous-input").textContent = "";
    input = '';
    previousInput = '';
}

function equals(){
    if (operator == '+'){
        let calc = parseInt(previousInput) + parseInt(input);
        calc = calc.toString();
        document.getElementById("display").textContent = calc.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById("previous-input").textContent = previousInput.replace(/\B(?=(\d{3})+(?!\d))/g, ",")  + " " + operator + " " + input + " =";
    }
}

function calculateAdd(){
    let calc = parseInt(previousInput) + parseInt(input);
    calc = calc.toString();
    console.log("calc" + calc)

    document.getElementById("display").textContent = calc.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("previous-input").textContent = calc.replace(/\B(?=(\d{3})+(?!\d))/g, ",")  + " " + operator;

    //return display(calc);
}

function display(num){
    
    console.log("length " + input.length);

    if (input == '' ){
        input = num.toString();
        console.log(input);
        document.getElementById("display").textContent = input;
    } else if (input == 0){
        document.getElementById("display").textContent = input;
    } else if (input.length <= 20){
        input += num.toString();
 
        console.log(input);
        document.getElementById("display").textContent = input.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
};

