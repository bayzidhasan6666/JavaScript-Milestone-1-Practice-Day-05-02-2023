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

let result = findingBadData([-4, -9, -5, -33, -55]);
console.log(result);
