/**
 * input []
 * */ 


// let number = 4;

// if(number > 5){
//     console.log('True');
// }else{
//     console.log('False');
// }

let numbers = [-1,2,-3,4,5,6,-7,8,-9,10];
let count = 0;

for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    // console.log(element);
    if(element > 5){
        // console.log('True');
        count = count + 1;
    }
    else{
        // console.log('False');
    }
}
console.log(count);
