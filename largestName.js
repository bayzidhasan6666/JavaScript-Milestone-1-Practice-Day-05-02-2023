// function largestName(f1,f2){
//     if(f1.length > f2.length){
//         return f1;
//     }
//     else{
//         return f2;
//     }
// }

// const result = largestName('sakib','rizwan');
// console.log(result);






function largestName(f1,f2,f3){
    if(f1.length > f2.length && f1.length > f3.length){
        return f1;
    }
    else if(f2.length > f3.length && f2.length > f1.length){
        return f2;
    }
    else{
        return f3;
    }
}

const result = largestName('sakib','rizwan','Bayzid Hasan');
console.log(result);



