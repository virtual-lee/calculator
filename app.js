let input ='';
let previousInput = '';

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
    document.getElementById("previous-input").textContent = input.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " +";
}    


function reset(){
    document.getElementById("display").textContent = "";
    document.getElementById("previous-input").textContent = "";
    input = '';
}

function calculate(){

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

