function mindGame(number){
    if(typeof number != 'number'){
        return 'Please Provide a number input'
    }
    let multiplyNumber= number * 3;
    let addNumber= multiplyNumber + 10;
    let divideNumber = addNumber / 2;
    let minuseNumber=divideNumber - 5;
    return minuseNumber;
}

let result = mindGame(5);
console.log(result);
