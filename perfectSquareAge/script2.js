var age = prompt("Enter your age");

if (age < 0 || age == 0){
    alert ("error, your age is not valid");
}

if (age % 2 != 0){
    alert("your age is odd!");
}

if (age == 21){
    alert("happy 21st birthday!");
}

if (age / Math.sqrt(age) == Math.sqrt(age)){
    alert("perfect square!");
}