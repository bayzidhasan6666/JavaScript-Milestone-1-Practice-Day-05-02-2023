function graeterThan5(numbers){
    let count = 0;

    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element > 5) count ++;
    }
    return count;
}


let result = graeterThan5([-1,2,-3,4,5,6,-7,8,-9,10]);
console.log(result);
