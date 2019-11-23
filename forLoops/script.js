//prints to the console all the numbers between -10 and 19
first = function(){
    for(i = -10; i<=19;i++){
        console.log(i);
    }
    alert("Program executed!")
    console.log(" ");
}

//shows all the even numbers from 10 to 40
second = function(){
    for(i = 10; i<= 40; i++){
        if (i % 2 === 0){
            console.log(i);
        }
    }
    alert("Program executed!");
    console.log(" ");
}

//prints all the odd numbers from 300 to 333
third = function(){
    for (i=300; i<=333; i++){
        if(i % 2 != 0){
            console.log(i);
        }
    }
    alert("program executed!");
    console.log(" ");
}

//shows all the multiples of 3 and 5 between 5 and 50
fourth = function(){
    for(i=5; i<=50; i++){
        if (i % 3 ===0 && i % 5 ===0){
            console.log(i);
        }
    }
    alert("program executed!");
    console.log(" ");
}