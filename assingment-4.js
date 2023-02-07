function mindGame(number){
    if(typeof number != 'number'){
        return 'Please Provide a number input'
    }
    let multiplyNumber= number * 3;
    let addNumber= multiplyNumber + 10;
    let devideNumber = addNumber / 2;
    let minuseNumber=devideNumber - 5;
    return minuseNumber;
}

// let result = mindGame(5);
// console.log(result);






function evenOdd(string){
    if(typeof string != 'string'){
        return 'Please provide a String input'
    }
    else if(string.length % 2 == 0){
        return 'even';
    }
    else{
        return 'odd';
    }
}

// let result = evenOdd('Phero');
// console.log(result);






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

// let result = isLGSeven(15);
// console.log(result);







function findingBadData(ages){
    let badData=0;
    if (!Array.isArray(ages)) {
        return 'Please provide an array of numbers';
    }
    for(let number of ages){
        if(number < 0){
            badData++;
        }
    }
    return badData;
}

// let result = findingBadData([ 2, -5, -7, -13 ]);
// console.log(result);







function  gemsToDiamond(friend1Gems,friend2Gems,friend3Gems){
    let multiplyFriend1Gems = friend1Gems * 21;
    let multiplyFriend2Gems = friend2Gems * 32;
    let multiplyFriend3Gems = friend3Gems * 43;
    let totalGems = multiplyFriend1Gems + multiplyFriend2Gems + multiplyFriend3Gems;
    if(typeof friend1Gems != 'number' || typeof friend2Gems != 'number' || typeof friend3Gems != 'number'){
        return 'Please provide a number input';
    }
    else if(totalGems >= 2000 ){
        let minuseGems = totalGems - 2000;
        return minuseGems;
    }
    else{
        return totalGems;
    }
}

// let result = gemsToDiamond(1,1,1);
// console.log(result);
