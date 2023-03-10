/**
 * ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে ।
 * */ 








function isJavaScriptFile(fileName){
    if(typeof fileName != 'string' || fileName.length == 0){
        return 'Please Provide a valid input';
    }
    if(fileName.endsWith('.js')){
        return true;
    }
    else{
        return false;
    }
}

let result = isJavaScriptFile('app.js');
console.log(result);





// another way to find last index 

// function isJavaScriptFile (str){
    
// if(str[str.length-1] == 's'){
//     if(str[str.length-2] == 'j'){
//         if(str[str.length-3] == '.')
//         return true;
//     }
// }
// else{
//     return false;
// }
// }

// let result = isJavaScriptFile('index.js')
// console.log(result);