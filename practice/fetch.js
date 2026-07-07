
// fetch('https://jsonplaceholder.typicode.com/users')

// console.log(" hello i am  abubaker");
// const student = getStudent(id)
// console.log(student)
// console.log(" hello i am  siddiq");


// function getStudent(id){
//     setTimeout(() => {
//         console.log("delayed data ok ")
//         return {name:"babu",id:id}
//     },2000)
// }




console.log(" hello i am  abubaker");
getStudent(1,(student)=>{
    console.log("student",student)
})
console.log(student)
console.log(" hello i am  siddiq");

 

function getStudent(id,callback){
    setTimeout(() => {
        console.log("delayed data ok ")
        callback ({name:"babu",id:id})
    },2000)
}

// function getSubjects (id){
//     setTimeout(() => {
//         console.log("getting  subject of student",id)
//         return ['maths',"physics",'chemistry','biology']
//     },2000)
// }