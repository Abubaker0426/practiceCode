// let message = document.getElementById("message");
// message.innerHTML = "iam a billionaire";

// string

// let str1 = "assalamualikkum "
// let str2 = "varahumathullhe va barakathu"

//  let srt = str1.concat("str1",str2);
// console.log(srt); //----> to join two string

/*
partitioning string 

slice(start,end)
substring(start,end)----> second one will what is the end charactor
substr(start,length) ----> first give the start poin and second is size 
*/

// let str1 = "hi every one how are you  "
// let str2 = "   good to meet you all in here  good and good  "

//  let str = str2.slice(4,10);
//  let str = str2.substring(4,10);
//  let str = str2.substr(-4,10);
//  let str = str2.replace("good","nice");
// let str = str2.replaceAll("good", "nice");
// let str = str2.toUpperCase();
// let str = str2.toLowerCase();
// let str = str2.toLocaleLowerCase();
// let str = str2.toString("good", "nice");
// let str = str2.toLocaleUpperCase("good", "nice");
// let str = str2.length();
// let str = str2.trim();
// let str = str2.trimStart();
// let str = str2.trimEnd();
//  console.log(str);

// console.log(str1[10])//---->  it will the index value to us
// console.log(str1.charAt(10))//---->  its alos same as above--> it gives the first position charactor
// console.log(str1.charCodeAt(10))//---->  it will  give unique code standard number
// console.log(str1.indexOf('e'))//----> which index itis
// console.log(str1.lastIndexOf("y"))//---->
// console.log(str1.search("are"))//---->
// console.log(str1.search("areeee"))//----> it wiil search the charactore and give the charactore
// console.log(str1.includes("are"))//----> it will give true or false if the is thre true or false
// console.log(str1.startsWith("r"))//----> it will its start with this or not
// console.log(str1.endsWith("a")) //----> it will its end with this or not

//  let name_1 = "abubaker";
//  console.log(Math.floor(Math.random() * name_1.length));// this was error by my side

// let name = "umarbai";
// console.log(name[Math.floor(Math.random() * name.length)]);//-->this is the correct one --->to print random number

// let bill = "rs.10"
// console.log(bill.length);
// console.log(bill.padEnd(7,'0'));
// console.log(bill.padStart(10,'0'));

// Template literals

// let a = `apply  tree `
//  console.log(`its a tree not  its a ${a} do you got it`)

// let b = `nan is
// not a nan
// but its a nane`
// console.log(b)

// let num = "₹95.005"
// console.log(`the total money is ${num}`)

// <------------Array------------>

// let mark = [20,30,40,50,60,70];
// console.log(mark[mark.length-1]);// to find the last index in an array
// console.log(mark)

// let arr = [10,12,34,["abu","sdq","a"],54,0,]
// console.log(arr);
// console.log(arr[3])

// tow dimensional arry

// let matrix = [[3,2,4,5,],[7,1,4,5,5,],[9,9,0,5],[12,23,34,45,56,]]
// console.log(matrix[2][2])

// Array methods

// push method ----> it will add value to the last

// let array = ["s","i","d","d","i","q"]
// array.push(".A")
// console.log(array)

// pop method ----> it will remove the last value

// let array2 = ["a","b","u","b","a","k","e","r"]
// array2.pop();
// console.log(array2)

// shift method ----> it will remove the first value

// let array3 = ["y","a","h","y","a",]
// console.log(array3.shift())
// console.log(array3)

// unshift method ----> it will add the first value

// let array3 = ["y","a","h","y","a",]
// console.log(array3.unshift(".A"))
// console.log(array3)

/*The splice() method overwrites the original array.
//splice method -----> it  used to  The splice() method adds and/or removes array elements.
 by using the splice methed we remove ,replace ,and add an element 

*/

// let array4 = ["A","B","D","U","L","L","A","H"]
// // array4.splice(2, 1, "II");
// // array4.splice(2, 0, "II");//-->replace
// array4.splice(2, 1, );  //-->delete

// console.log(array4);

//slice method is used to suprate the element-->(values)
//it will not include the ending element
// let array5 = ["a","b","c","d","e","f","g","h"]
// // array5.slice(2, 5);
// // console.log(array5);
// console.log(array5.slice(2, 5));//--correct formate
// array5.reverse();
// console.log(array5);// --> used to reverse the array

// // -- - - - - -- - - join
// let arr6 = ["A", "B", "D", "U", "L", "L", "A", "H"];
// arr6.join()
// console.log(arr6.join());//-- it will make  join tour string---convert array to string

// //  --  -- - - - - -  -split--->convert array to string

// let str = "A B D U L L A H"
// let arr7 = str.split(",")
// console.log(arr7);//-- it will make  join tour string---convert array to string

// let farr = [1,2,3,4]
// let sarr = [5,6,7,8]

// let joinArr = [farr,sarr]
// console.log(joinArr)

// // -- using concat funcation
// joinArr = farr.concat(sarr)//
// console.log(joinArr);

// // joining arrays value using spread oprater
// let join = [...farr,...sarr]
// console.log(join)

// let akhil = ["c","o","r","e","p","a","t","h","i"]

// let broblance =  [ 9,9,9,9,9,9,];
// let middleIndex = Math.floor(broblance.length / 2);
// broblance.splice(middleIndex,0,0);
// console.log(broblance)
// console.log(ablace.length());

// let ablace = [9, 9, 9, 9, 9, 9];
// // Find the middle position
// let middleIndexs = Math.floor(ablace.length / 2);
// // Insert 0 at the middle position
// ablace.splice(middleIndexs, 0, 0);
// console.log(ablace);
//  // Output: [9, 9, 9, 0, 9, 9, 9]

// if and else ----condition oprater

// let pwd_correct = false
// if(pwd_correct){
//   console.log("your login in ");
// }
// else{
//   console.log("your not in check your pwd");
// }

// let a = 20, b = 30
// let max

// if (a>b)
// max =a
// else
// max = b

// max = a>b?a:b
// console.log(max);

// alert(1/0);

// let age = prompt("what is your age " ,100)
// alert(age);

// let isBoss = confirm("Are you the boss?");

// alert(isBoss);

// let isHeBilleneor = confrim(" are you a billeneor");
// alert(isHeBilleneor);

// let age = Number("abubker");
// console.log(age);
// typeof(age);
// let a = 10;
// let b = 12;
// let c = a + b;
// console.log(c);

let apple = 5
let orange =  4
 console.log(apple+orange); 
