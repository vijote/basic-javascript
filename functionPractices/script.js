var number = prompt("Please insert a number");
var str = prompt("Please write something");

function isEven(num){
    if(num % 2 === 0){
        return true;
    }
    return false;
}

function factorial(num){
    result = 1;

    if(number === 0){
        return 1;
    }

    for(index=1;index<=num;index++){ 

        result = result * index;
    }
    return result;
}

    function kebabToSnake(str) {
        //replace all dashes with
        var myString = str.replace(/-/g, "_");
        //return str
        console.log(myString);
        return myString;
        //try with: "this - is -a - ---test";
    }