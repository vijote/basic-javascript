funcOne = function(){
    number = -10;
    console.log("Writing all numbers between -10 and 19...");

    while (number <= 19){
        
        console.log("actual number is: "+number);
        number = number+1;
    }

    alert("program executed!");
    console.log(" ");
}

funcTwo = function(){
    number = 10;
    console.log("Writing all even numbers between 10 and 40...");

    while (number <=40){
        if(number % 2 === 0){
            console.log(number);
        }
        number = number+1;
    }

    alert("program executed!");
    console.log(" ");
}

funcThree = function(){
    number = 300;
    console.log("Writing all odd numbers between 300 and 333...");

    while(number <=333){
        if (number % 2 !=0){
            console.log(number);
        }
        number= number+1;
    }

    alert("program executed!");
    console.log(" ");
}

funcFour = function(){
    number = 5;
    console.log("Writing all numbers dibisible by 5 and 3 between 5 and 50...");

    while(number <=50){
        if(number % 5 === 0 && number % 3 ===0){
            console.log(number);
        }
        number = number+1;
    }

    alert("program executed!");
    console.log(" ");
}