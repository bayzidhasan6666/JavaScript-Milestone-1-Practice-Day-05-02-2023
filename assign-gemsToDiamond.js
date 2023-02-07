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

let result = gemsToDiamond(1,1,1);
console.log(result);

