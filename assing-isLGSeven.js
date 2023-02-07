function isLGSeven(number){

    let minuseInput = number - 7;
    if(typeof number!= 'number'){
        return 'Please provide a number input';
    }
    else if(minuseInput <= 7){
        return minuseInput;
    }
    else{
        return number * 2;
    }
}

let result = isLGSeven(15);
console.log(result);