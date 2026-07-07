// let fnme = 'abul';
// let lname ='kasim';
// let age = prompt("what is the age of abul  guess it");

// // templet
// let result = `${fname} ${lname}  is ${age} years old `;

// alert(result);


// DEFAULT PARAMETER
// function welcome (user='hey secreact person',massage='hi'){
// alert(`${user} ${massage}`)
// }
// welcome( );

// ARROW Function
 
// let create =(title,body) => {
//     if (!title){
//         throw new Error('a title is required')
//     }
//     if (!body){
//         throw new Error('a body is required')
//     }
     
//     return alert(`${title} ${body}`);
// }
  
// create("title", "body");


// ARROW Function this key word  

// let tamilnadu ={
//     mountains:['Everest','first mountain','second mountain'],

//     printWithDash:function(){
//         setTimeout(()=> console,log(this.mountains.join(' - ')),3000);
//     }
// };

// tamilnadu.printWithDash();

// object destructuing

// let thingToDo = {
//     morning:'Exercise',
//     afternoon:'Work',
//     evening:'Code',
//     night:['Sleep','Dream']
// };
// let{morning,afternoon} = thingToDo;
// morning = 'good';
// console.log(morning,' - ',afternoon);


// function destructuing
// let uniStudent = ({name,university}) =>{
//     console.log(`${name} from ${university}`);
// }

// uniStudent({
//   name: "abul",
//   university: "university of abulkasim "
// });

// array destructuing
// let [,,firstmountain] =['everest','fish tail','annamalai']
// console.log(firstmountain);

// restructuring
// let adventur = {
//     name: 'everest',
//     height:'9999',
//     output : function(){
//         console.log(`Mt.${this.name} is ${this.height} meter tall`);
//     }
// };
// adventur.output();


// sperd and rest operator
// let school = ['highschool','secondery','primarydschool'];
  

// let midschool = ['elkg','preschool']

// let allschool =[...school , ...midschool];
// // console.log(allschool);



// // sperd and rest operator in object

// let day = 
// {
//     barkfast:'toast',
//     lunch:'rice'
// }
// let night = 
// {
//     dinneru:'noodles',
    
// }

// let picnic = {...day,...night};
// console.log(picnic);


// // rest operator 
// let rivers= ['tamiribarani','kavari','kanga']

// let [first,...rest] = rivers; 
// first will give only first value and rest will give the rest value of the array
// console.log(rest);
// console.log(first);



// adding method to function


// function  Holiday(destination , days){
//     this.destination = destination
//     this.days = days;
// }

// Holiday.prototype.info = function () {
//   console.log(`${this.destination} | ${this.days} days`);
//   console.log(this.destination + "|" + this.days + " days");
// };

// var India = new Holiday("India", 40);
// console.log(India.info());


// Constructor function to create holiday objects
// function Abubaker(destination, days) {
//     this.destination = destination; // Assign destination
//     // this.days = days; // Assign days
// }

// Adding a method to the prototype of Abubaker
// Abubaker.prototype.info = function () {
//   // Log the destination and days in the specified format
//   // console.log(this.destination + " | " + this.days + " days");
// };

// Creating a new Abubaker object for India
// var India = new Abubaker("India", 40);

// Calling the info method to log the holiday information
// console.log(India.info());


// class constructor
    class Holiday{
      constructor(destination,days){
         this.destination = destination; // Assign destination
        this.days = days; 
      }
      info(){
        console.log(`${this.destination} will take ${this.days} days`);
      }

    }
//     const trip = new Holiday( 'kathmandu , india',30);
// console.log(trip.info());
 
// sub class

// class Expedition extends Holiday{
//       constructor(destination,days,gear){
//         super(destination,days);
//         this.gear = gear;
//       }

//       info(){
//         super.info();
//         console.log(`bring your ${this.gear.join('and your')}`)
//       }
// }
// const tripWithGear = new  Expedition('Everevst',30,['sunglasses','Flage','camera']);

// tripWithGear.info();
