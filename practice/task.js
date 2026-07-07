// We get the Center value of the Array
// If the Array count is Even => like If the center value comes 2 values you have to add this two values and divide by 2 ;
// If the Array count is ODD => like Get the Center value of the Array;
// Example of Even Array 
// let arr = [2,3,4,5,6,7]     => add  (4+5)/2 = 9/2 = 4.5 is the center value

// Example of Odd Array 
// let arr = [2, 3, 4, 5, 6, 7,8]; =>  5 is the center value

let array = [2, 3, 4, 5, 6, 7,8];
let result = [];
let len = array.length;     
console.log(len);           // 6

const getMiddleValue = () =>{
    if(len % 2 == 0){
        result.push((array[len/2 -1]+ array[len/2]) /2 );
    }else{
        result.push(array[(len - 1 ) / 2]);
    }
    return result;
}
console.log(getMiddleValue());
