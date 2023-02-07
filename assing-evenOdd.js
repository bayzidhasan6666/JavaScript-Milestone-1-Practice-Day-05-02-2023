function evenOdd(string){
    if(typeof string != 'string'){
        return 'Please provide a String input'
    }
    if(string.length % 2 == 0){
        return 'even';
    }
    else{
        return 'odd';
    }
}

let result = evenOdd('Phero');
console.log(result);