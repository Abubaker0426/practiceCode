// let ABC ={
//  A_for: "Apple",
//  B_for:"Ball",
//  C_for:"Cat"
// }


// function  myNewFunction(){
// console.log(ABC.B_for)
// }
// // myNewFunction(ABC.C_for) // -- it wil not give the key value of object -- 
// myNewFunction()




// function myName(name, name2, name3,){  //--
// console.log(name, name2, name3,)
// }
// // myName("abubaker", null, hi ) // we can only  give arguments in string
// myName("abubaker", null, "100,000,000" ) // we can only  give arguments in string


// /*  in this  function  we take 
//  */
// const person1 = {
//     name:"Abubaker Siddiq",
//     age:22
// }
// const person2 = {
//     name:"Akhil",
//     age:18
// }

// const myDetail = (name, age) => {
//      return(
//         console.log(name, age)
        
//      )
// }
// myDetail(person1.name, person1.age)
// myDetail(person2.name,
//      person2.age)
// myDetail("Abdulla", 25)
// /* arguments is the value  that gets assgin to the parameter */


// const person1 = {
//     name:"Abul KAsim",
//     age:22
// }
// const person2 = {
//     name:"Sabeek",
//     age:18
// }
// //  we can also give the object as a  parameters

// let persons = (person1,person2) => {
//     return (
//         console.log(person1)
//     )
// }
// persons(person1,)
// persons(person2)
// persons({name: "maharaja", age:40})// if we want to give the object value or data  we can give like this in {} flower bracket
// //we pass the value drirectly the value in here




//  giving default value for the function 

const person1 = {
    name:"Abul KAsim",
    age:22
}
const person2 = {
    name:"Sabeek",
    age:18
}
// function person( name= "abubaker", age = 44){
// console.log(name, age)
// }
// person()



// Rest parameters
//if we don't know how many parameter we are going to pass then we can use rest parameter 
// to reprasend the  rest parameter  we use (...) three dot 

// function Details(...restParameters){
//   console.log(restParameters);
  
// }
// Details( person1.name,person2.name,person1.age,person2.age)



// returning value ijn function 
// 


function returnValue( Fname, Lname){
if (Fname=== ""){
  return 
}
const name = Fname + Lname
console.log(name
  
);


}

returnValue("Abu","Sdq")
// function returnValue( Fname, Lname){
// const name = `${Fname}  ${Lname}`
// return name

// }

// returnValue("Abu","Sdq")

