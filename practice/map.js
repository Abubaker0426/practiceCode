// const number =[1,2,3,4,5,]

// const squaredNumber = number.map((number)=>{
//     return(
//         number * number
//     )

// })
// console.log(" here comes our squared number" + squaredNumber)


//===============================================================
// const numbers =[1,2,3,4,5,]

// const squaredNumbers = numbers.map((numbers)=>{
//     return(
//         numbers
//     )

// })
// console.log(" here comes our squared number" + squaredNumbers)
// // map method reads all the value in the  Array



//----------------------------------------------------
// const days =['Sunday','Mondaty','Tuesday','Wednesday','Thursday','Firday','Saturday']

// const firstThreeLetter = days.map((day)=>{
//     return (
//         day.substring(0,3)
//     )
// });
// console.log(firstThreeLetter);

//----------------------------------------------------------------
// const people =[
//     {
//         first_name: 'abu',
//         last_name:'sdq'
//     },
//     {
//         first_name: 'abul',
//         last_name:'kasim'
//     },
//     {
//         first_name: 'suhail',
//         last_name:'basha'
//     },
//     {
//         first_name: 'sabbek',
//         last_name:'rahuman'
//     },
//     {
//         first_name: 'abubaker',
//         last_name:'siddiq'
//     }
// ]

// const fullName = people.map((peopleName)=>{
//     return(
//         // peopleName.first_name + peopleName.last_name
//         `${peopleName.first_name}${peopleName.last_name}`
//     )
// })
// console.log(fullName);

//_________________________________________________
// const animals = [
//     {
//         name: "cat",
//         size:'small'
//     },
//     {
//         name: "dog",
//         size:'small'
//     },
//     {
//         name: "pupy",
//         size:'small'
//     },
//     {
//         name: "rabbit",
//         size:'small'
//     },
//     {
//         name: "snake",
//         size:'small'
//     },
//     {
//         name: "cow",
//         size:'small'
//     },
//     {
//         name: "pig",
//         size:'small'
//     },
// ]

// const animalsName = animals.map((onlyName)=>{
//     return(
//         // onlyName.name
//         onlyName
//     )

// })
// console.log(animalsName)

//-------------------------------------------------------------------------
// map whit index value 
// i am getting the value and the index  of the array in object
// const theNumber = [12,2,3,4,5,6,7,8,9,]
// // let things = theNumber.map((value,index,arr)=>{// WE CAN GET WHOLE ARRAY ALSO
// let things = theNumber.map((value,index)=>{

//     return{
//         value,index
//     }
// })
// console.log(things)

//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
// create a new array  white  each value multiplied by the net value 
// let straters = [2, 5, 10, 50];
// let result = straters.map((value, index) => {
//     // If it's the last element, multiply by the first element (or return as is, if needed)
//     let nextValue = straters[index = 0]
//     return value * nextValue;
// });

// console.log(result);



// ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
// create a new array  white  each value multiplied by the net value
// the last value should be mutiplied by the first  value
// eg.[2*5,5*10,10*2]
// let strater = [2, 5, 10];

// const multipliedByNext = strater.map((number, index, array) => {
//     let nextIndex = index + 1;

//     if (index == array.length - 1) {
//         nextIndex = 0
//     }
//     return number * array[nextIndex]
// })
// console.log(multipliedByNext)

// -----------------------------------------------------------------------------------

// basic .map() method

// const num1 = [10, 20, 30, 40, 50];
// const num2 = num1.map(myFn)
// function myFn(value,index,arr) {// without  value the map  will not run the FN
//     return (
//         value * 2
//     )

// }
// console.log(num2)


//------------------------------------------------------------------------------------
const letters = ["a", "b", "c"];
const indexedLetters = letters.map((letter, index) => {
    return `${index + 1}: ${letter}`;
});

console.log(indexedLetters); // ["1: a", "2: b", "3: c"]

