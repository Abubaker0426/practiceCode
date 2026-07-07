// let abul = 75

// var abubaker = 85;
// const abdull = 50;

// // console.log is used to show the out in browser

// console.log(`${abul}

//    ${abubaker}

//    ${abdull}
//    `);
// const radius =  1;
// const pi = Math.PI;
// const area = pi * radius * radius;
// console.log(`the given radius is ${area.toFixed(2)}`)

// String

// When a variable is used to store textual value, a primitive data type stringis used. Thus, the stringrepresents textual values. Stringvalues are written in quotes, either single or double.

// Example:

// let personName= "Rexha";    //OR
// let perSonName = '‘Rexha’';    // both will have its value as Rexha
// You can use quotes inside a string but that shouldn't match the quotes surrounding the string. Strings containing single quotes must be enclosed within double quotes and vice versa.

// Example:

// let ownership= "Abul's";    //OR
// let Ownership = 'Akhil"s';
// This will be interpreted asRexha's andRexha"s respectively. Thus, use opposite quotes inside and outside of JavaScript single and double quotes.

// But if you use the same quotes inside a string and to enclose the string:

// Example:

// let ownership= "Rexha"s";    //OR
// let ownership = 'Rexha's';
// It is a syntax error.

// Thus, remember, strings containing single quotes must be enlosed within double quotes and strings containing double quotes must be enclosed within single quotes.

// To access any character within the string, it is important to be aware of its position in the string.
// The first character exists at index 0, next at index 1, and so on.

// let tecakt = 9
// let Discount ="10%"
// let seats = 3
// let allSeats = (3*9);
// console.log(allSeats)

// Ticket price and number of seats
// const ticketPrice = 9;
// const numberOfSeats = 3;
// const discountPercentage = 10;

// Calculate the total price without discount
// let totalPrice = ticketPrice * numberOfSeats;

// Calculate the discount amount
// let discountAmount = (discountPercentage / 100) * totalPrice;
// Calculate the final price after applying the discount
// let finalPrice = totalPrice - discountAmount;

// Output the results
// console.log(`Total price for ${numberOfSeats} seats (without discount): $${totalPrice}`);
// console.log(`Festive season discount (${discountPercentage}%): $${discountAmount.toFixed(2)}`);
// console.log(`Final price after discount: $${finalPrice.toFixed(2)}`);

// const TicketMoney = 9;
// const NumberOfSeats = 3;
// const DiscountMoney = 10;

// let totalMoney = TicketMoney * NumberOfSeats;
// console.log(`The Total Amount for 3 seats is  ${totalMoney}`);
// let discountAmount = (DiscountMoney / 100) * totalMoney;
// console.log(`the discount amount your getting is ${discountAmount}`);
// let finalAmount = discountAmount - totalMoney;
// console.log(`the final amount for you is ${finalAmount}`);
// var counter = 0;
// for (var i = 0; i <= 5; i++) {
//   if (i == 3) break;
//   counter++;
// }
// console.log(counter);//  which is use to see the last value of the loop 

// let counter = 0;
// let i; // Declare 'i' outside of the loop to avoid block scope issues
// for (i = 0; i <= 5; i++) {
//   if (i == 3) break; // Breaks the loop when i equals 3
//   counter++; // Increments the counter for each iteration
// }
// console.log(i); // Outputs the value of 'i' after the loop
// console.log(counter); // Outputs the final value of counter
   

// ---------break condition

    // for (let i = 0; i <=10; i--){
    //     console.log(i);
    //     if (i==-7)break;
    // }

// --------- continue  condition

// let counter = 0;
// for (i = 0 ;i <= 5 ; i++){
//     if(i==3)continue;
//     counter++;
// }
// console.log(counter);

// for (i=0;i<=5;i++){
//     // console.log(i);
//     if (i==3)continue;
//     console.log(i);
// }

// for (i=0;i<=5;i++){
//     if(i == 3)break;
//     console.log(i)
// }

// if statements
 


// let num = 13;
// if (num % 2 == 0) {
//   console.log("This is an even number");
// } else {
//   console.log("This os an Odd number");
// }


// let counter = 0;
// for (let i = 0; i < 5; i++) {
//   counter = counter +1;
//   console.log(counter);
// //   console.log(i);
// } 


// let mark = "";

// if (mark == 100) {
//   console.log(" you got Sentam ");
// } else if (mark >= 80 && mark <= 90) {
//   console.log("You got O gread");
// } else if (mark >= 60 && mark <= 80) {
//   console.log("You got A gread");
// } else if (mark >= 45 && mark <= 60) {
//   console.log("You got B gread");
// } else if (mark >= 30 && mark <= 45) {
//   console.log("You got c gread");
// } else  {
//   console.log("You have failed the exam");
// }
// console.log(mark)


// let mark = 90;

// switch (true) {
//   case mark === 100:
//     console.log("You got Sentam");
//     break;
//   case mark >= 80 && mark <= 90:
//     console.log("You got O grade");
//     break;
//   case mark >= 60 && mark <= 80:
//     console.log("You got A grade");
//     break;
//   case mark >= 45 && mark <= 60:
//     console.log("You got B grade");
//     break;
//   case mark >= 30 && mark <= 45:
//     console.log("You got C grade");
//     break;
//   default:
//     console.log("You have failed the exam");
// }

// console.log(mark);


// let day = "wan";

// if (day == "Monday" ){
//     console.log(" You should wake up at '3:00 PM ' in the Night")
// }
// else if(day == "Tuesday" ){
//     console.log(" You should wake up at '4:00 PM ' in the erely Morning")
// }
// else if(day == "Friday" ){
//     console.log(" You should wake up at '10:00 PM ' in the Morning")
// }
// else if(day == "Saterday" ){
//     console.log(" You should wake up at '1:00 AM ' in the Afternoon")
// }
// else{
//     console.log(" Day Off")
// }

// Fruits

// let Fruits = "anu"; 

// switch(Fruits){
//     case "Banana":
//         console.log("Banano is Yelow");
//         break;
//     case "Apple":
//         console.log("Apple is red" )
//         break;
//     case "Orange":
//         console.log("Orange is Orange")
//         break;
//     default:{
//         console.log("It's Empty")
//     }    
// }

// let score = 85;

// switch (true) {
//   case score === 100:
//     console.log("Perfect score!");
//     break;
//   case score >= 80 && score < 100:
//     console.log("Great job!"); // Works because the condition is true
//     break;
//   case score >= 60 && score < 80:
//     console.log("Good effort.");
//     break;
//   default:
//     console.log("Needs improvement.");
// }

// let a = parseInt(prompt("Enter the value for a:")); // Ask the user to input a value for a
// let b = parseInt(prompt("Enter the value for b:")); // Ask the user to input a value for b

// switch (
//   a + b // The expression now evaluates to the sum of user input values
// ) {
//   case 15:
//     console.log("Sum is 15.");
//     break;
//   case 20:
//     console.log("Sum is 20.");
//     break;
//   default:
//     console.log("Different sum.");
// }




// let MobileShop  = 68;

// switch (true) {
//   case MobileShop >= 90 && MobileShop <= 100:
//     console.log("For This Discount you got Iphone ");
//     break;
//   case MobileShop >= 70 && MobileShop <= 90:
//     console.log("For This Discount you got Samsong ");
//     break;
//   case MobileShop >= 50 && MobileShop <= 70:
//     console.log("For This Discount you got Nokia  ");
//     break;
//   case MobileShop >= 30 && MobileShop <= 50:
//     console.log("For This Discount you got MI  ");
//     break;
//   default:
//     console.log("Sorry Better Luck Next Time");
// }


// let choice = 3;
// let tempFahrenheit = 200;
// const THIRTYTWO = 32;
// const TEMP = 1.8;
// const NORMAL_CELSIUS = 37;
// let result1 = tempFahrenheit - THIRTYTWO;
// let result2 = result1 / TEMP;

// switch (choice) {
//   case 1:
//     console.log("Your body temperature in Celsius is: " + result2);
//     result2 > NORMAL_CELSIUS
//       ? console.log("You have fever, take rest!")
//       : console.log("You are absolutely OK!! Enjoy");
//     break;
//   case 2:
//    console.log("No, I don't want to check whether i have fever or not");
//     break;
//   default:
//     console.log("Sorry wrong choice provided");
// }





// let noOfWeekendsWorked = 2;
// let compOffEligibiltyStatus;
// noOfWeekendsWorked > 0
//   ? (compOffEligibiltyStatus = "You are eligible to avail compOff")
//   : (compOffEligibiltyStatus = "You are not eligible to avail compOff");
// console.log(compOffEligibiltyStatus); 

// let noOfWeekendsWorked = 2 ;
// let compOffEligibiltyStatus;


// if (noOfWeekendsWorked > 0){
//  compOffEligibiltyStatus = "You are eligible to avail compOff";
// }else{
//  compOffEligibiltyStatus = "You are not eligible to avail compOff";
// }

// console.log(compOffEligibiltyStatus);

// let All = prompt("enter the value");
// let allOver = All * compOffEligibiltyStatus;// ----> this code came error so i need to correct it 
// console.log(allOver);


// Write a JavaScript code to make online booking of theatre tickets and calculate the total price based on the below conditions:
// If seats to be booked are not more than 2, the cost per ticket remains $9.
// If seats are 5 or more, booking is not allowed.
// If seats to be booked are more than 2 but less than 5, based on the number of seats booked, do the following:
// Calculate total cost by applying discounts of 5, 7, 9, 11 percent, and so on for customer 1,2,3 and 4.
// Try the code with different values for the number of seats


// (dis / 100) * Total;--------> formula for discount

// let OneTicketPrice = 9;
// let seats = 4;
// let disForThree = 5;//presentage
// let disForFour = 7;//presentage
// let TotalPrice 


// if (seats <= 0) {
//   console.log(" You Have To Book The Ticket ");
// } else if (seats <= 2) {
//    TotalPrice = seats * OneTicketPrice;
//    console.log(`The Total Amount is $${TotalPrice} And You Dont Get Discount For This `);
// } 
// else if (seats === 3) {
//   TotalPrice = seats * OneTicketPrice;
//   console.log(` The Total Amount is $${TotalPrice}`);
//   let discount = (disForThree / 100) * TotalPrice;
//   console.log(` The discount Amount is $${discount}`);
//   let DisAmount = discount - TotalPrice; 
//   console.log(` The Total Amount With Discount is $${DisAmount}`);
// }
// else if (seats === 4) {
//   TotalPrice = seats * OneTicketPrice;
//   console.log(` The Total Amount is $${TotalPrice}`);
//   let discount = (disForFour / 100) * TotalPrice;
//   console.log(` The discount Amount is $${discount}`);
//   let DisAmount = TotalPrice - discount   ; 
//   console.log(` The Total Amount With Discount is $${DisAmount}`);
// }
// else if (seats >= 5) {
//   console.log(`More then Four Seats Are Not Allowed  For Booking `)
// } else {
//   console.log(" You Have To Book The Ticket");
// }


// let counter = 0
// for(i=0;i < 5 ; i++){
//   // console.log(i)
//   counter = counter + 1
//   console.log(counter)

// }

// let a = 0
// let i = 0
// while(a < 5){
//   console.log(i)
//   a++
//   i++
//   console.log(a)
// }


// let i = 6
// do{
//   i++
 
// console.log(i)
// }while( i <  10)


//  let loop = 0;

//  let courses = ["HTML", "CSS", "JS", "Bootstrap", "Angular", "ReactJS"];

//  for (loop = 0; loop < courses.length; loop++) {
//    console.log(courses[loop]);
//   // console.log(courses);
 
//  }

  //  let Mango = 1;
  //                  while (Mango <= 10) {
  //                    console.log("2 *" + Mango +   "=");
  //                    console.log(2 * Mango);
  //                    Mango++;
  //                  }

                   
//  for(apple=0;apple <= 10; apple++){
//   // console.log("2 *" + apple + "" )
//   console.log(2*apple)
//  }


// for (let i = 0 ; i < 5 ; i++){
//   console.log(`abubaker siddiq  ${i}`)
// }



//  let ch;
//  do {
//    execute();
//    ch = prompt("Press Y to continue");
//  } while (ch == "Y");

//  function execute() {
//    //Functions from No.1 to No.6 are Built-In Functions
//    //1. alert
//    alert("Let us calculate SI");

//    //2. prompt
//    let P = prompt("Please enter Principal Amount");
//    let R = prompt("Please enter Rate of Interest ");
//    let N = prompt("Please enter Number of Years ");
//    console.log("You have entered P :  " + P + "<br><br>");
//    console.log("You have entered R :  " + R + "<br><br>");
//    console.log("You have entered N :  " + N + "<br><br>");

//    //3. confirm
//    let decision = confirm("Shall we proceed to calculate SI?");
//    if (decision){
//  console.log("You decided to proceed" + "<br><br>");
//    }
//    else {console.log("You decided not to proceed" + "<br><br>");}

//    //4. eval
//    eval(P * R * N);
//    console.log("Calculated SI is " + eval(P * R * N) / 100 + "<br><br>");
//  }


  //  let name = "Default";
  //  let firstName = "Nisha";
  //  let lastName = "Mehta";
  //  // eslint-disable-next-line no-irregular-whitespace, no-irregular-whitespace
  //  name=firstName + ' ' + lastName;
  //  console.log("Your full name is: " + name);



// const numbers = [75, 14, 89, 16];
// let text = " ";
// for (i in numbers) {
//   text += numbers[i] + "";
// }  

// console.log(text);



// let scores = [29,34,56,78];
// let totalScore = 0;

// for(let i = 0; i < scores.length ;i++){
// totalScore +=scores;
// }
// console.log("score",totalScore)



//  var courses = ["HTML", "CSS", "JS", "Bootstrap", "Angular", "ReactJS"];

//  for (i = 0; i < courses.length; i++) {
//    console.log(courses[i]);
//  }


  // var j = 1;
  // while (j <= 10) {
  //   console.log("2 *" + j + "=");
  //   console.log(2 * j);
  //   j++;
  // }



  //  let ch;
  //  do {
  //    execute();
  //    ch = prompt("Press Y to continue");
  //  } while (ch == "Y");

  //  function execute() {
  //    //Functions from No.1 to No.6 are Built-In Functions
  //    //1. alert
  //    alert("Let us calculate SI");

  //    //2. prompt
  //    let P = prompt("Please enter Principal Amount");
  //    let R = prompt("Please enter Rate of Interest ");
  //    let N = prompt("Please enter Number of Years ");
  //    document.write("You have entered P :  " + P + "<br><br>");
  //    document.write("You have entered R :  " + R + "<br><br>");
  //    document.write("You have entered N :  " + N + "<br><br>");

  //    //3. confirm
  //    let decision = confirm("Shall we proceed to calculate SI?");
  //    if (decision) console.log("You decided to proceed" + "<br><br>");
  //    else console.log("You decided not to proceed" + "<br><br>");

  //    //4. eval
  //    eval(P * R * N);
  //    document.write("Calculated SI is " + eval(P * R * N) / 100 + "<br><br>");
  //  }




// let num = 10;
// for (counter = 0; counter < num; counter++) {
//   if (counter % 2== 0 ) {
//     console.log(counter +  " ");
//   }
// } 



// let sumArray = [45,56,90,12,21,112,100,37,80]

// for (let i = 0; i < sumArray.length; i++) {
//   const element = sumArray[i];
//   console.log(element)
// }


// 


// const showNumber = (a, b, c) =>{
//   return 

// }
// console.log(1, 2, 3, 4, 5, 6, 7, 8, )



// in js function  there are  three  scope 1.global 2.local 3.block scope 
// 1. global scope
// Variables defined outside function have Global Scope and they are accessible anywhere in the program. 


// //Global variable
// let greet = "Hello JavaScript";
// function message() {
	
// //Global variable accessed inside the function
// 	console.log("Message from inside the function: " + greet);
// }
// message();
// //Global variable accessed outside the function
// console.log("Message from outside the function: " + greet);


// // local scope

// /*   Variables declared inside the function would have local scope. These variables cannot be accessed outside the declared function block.*/
// function message() {
// 	//Local variable
// 	let greet = "Hello JavaScript";
// 	//Local variables are accessible inside the function
// 	console.log("Message from inside the function: " + greet);
// }
// message();
// //Local variable cannot be accessed outside the function
// console.log("Message from outside the function: " + greet);

// //Message from inside the function: Hello JavaScript
// //Uncaught ReferenceError: greet is not defined




//Global variable
let firstName = "Mark";
function fullName() {
	//Variable declared without var has global scope
	lastName = "Zuckerberg";
	console.log("Full Name from inside the function: " + firstName + " " + lastName);
}
fullName();
console.log("Full Name from outside the function: " + firstName + " " + lastName);
//Full Name from inside the function: Mark Zuckerberg
//Full Name from outside the function: Mark Zuckerberg
