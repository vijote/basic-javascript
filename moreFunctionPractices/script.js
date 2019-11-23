var numbers= [15,16,19,33];
var lol = ["a", "a", "a"];
var lel = ["","s"];

//prints an array from back to forward
function printReverse(nums){
    for (i=nums.length-1; i>=0; i--){
        console.log(nums[i]);
    }
}

//verify if all the spaces of an array are equals
//option 1, a little bit longer
function isUniform(arr){
    var comparation = null;


    for( i=0; i<=arr.length-1; i++){
        if(arr[0]===arr[i]){
            comparation++;
        }
    }
    if (comparation===arr.length)
        return true;

    else
        return false;
}

//option 2, a little more simpler
// function isUniform(arr){

//     for( i=0; i<=arr.length-1; i++){
//         if(arr[0]!==arr[i]){
//             return false;
//         }
//     }
//         return true;
// }


//adds all the values of an array
function sumArray(arrayToSum){
    var sumatory=0;
    for(i=0;i<=arrayToSum.length-1;i++){
        sumatory=sumatory+arrayToSum[i];
    }
    console.log(sumatory);
}

//calculates the max value of an array
function max(items){
    // el valor maximo comienza siendo el primer elemento del arreglo
    var maxvalue= items[0];

    for(i=0;i<items.length;i++){

        //si algun elemento del arreglo supera al primer valor
        //entonces ese es el nuevo maximo valor.
        if(items[i]>maxvalue)
            maxvalue = items[i];
    }

    return maxvalue;
}