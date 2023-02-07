// function reverseName(f1,f2){
//     let f1Length = f1.length;
//     let f2Length = f2.length;

//     if(f1Length > f2Length){
//         return f1.split("").reverse().join("");
//     }
//     else{
//         return f2.split("").reverse().join("");
//     }
// }


// let reversedName = reverseName("sakib", "Rizwan");
// console.log(reversedName);





// another way
// function reverseName(f1,f2){
    

//     if(f1.length > f2.length){
//         return f1.split("").reverse().join("");
//     }
//     else{
//         return f2.split("").reverse().join("");
//     }
// }


// let reversedName = reverseName("sakib", "Rizwan");
// console.log(reversedName);








// another way 

// let str = "Bayzid";

// let reverseString = "";
// for(let i = str.length-1;i>=0; i--){
//     const element = str[i];
//     reverseString = reverseString + element;
// }

// console.log(reverseString);





// Reverse with looooop


function reverseName(f1,f2){
    let largestName ="";
    

    if(f1.length > f2.length){
        largestName = f1;
    }
    else{
        largestName = f2;
    }
    let reverseString = "";
    for(let i = largestName.length-1;i>=0; i--){
    const element = largestName[i];
    reverseString = reverseString + element;
}
    return reverseString;
}


let reversedName = reverseName("sakib", "Rizwan");
console.log(reversedName);

