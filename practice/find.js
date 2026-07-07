// const findVal = [1,2,3,4,5,6,77,]

// let result =  findVal.find((num,i,arr)=>{
//     console.log(i,arr,num)
    
//     return num > 5
// })
// console.log(`the greater value is  ${result}`)


const findEvenNum = [1,2,3,4,5,6,7,8,9,0]

// Method 1: Using if-else with logging
const evenNumWithIf = () => {
    return findEvenNum.find((num) => {
        if(num % 2 === 0) {
            console.log("even number is " + num);
            return true;
        } else {
            console.log("odd number is " + num);
            return false;

        }
    });
};

// Method 2: Direct comparison (shortest way)
const evenNumDirect = () => {
    return findEvenNum.find(num => num % 2 === 0);
};

// Method 3: Using ternary with logging
const evenNumTernary = () => findEvenNum.find(num => {
    const isEven = num % 2 === 0;
    console.log(`${num} is ${isEven ? 'even' : 'odd'}`);
    return isEven;
});

// Method 4: Using separate function
const isEven = num => num % 2 === 0;
const evenNumSeparate = () => findEvenNum.find(isEven);

// Testing all methods
console.log("Method 1 result:", evenNumWithIf());
console.log("Method 2 result:", evenNumDirect());
console.log("Method 3 result:", evenNumTernary());
console.log("Method 4 result:", evenNumSeparate());