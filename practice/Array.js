const myarr = [1, 2, 3, 4, 5,]// one type of array declareation 
console.log(myarr[0])

const mySecondArr = new Array("abu", "Akhil", "Ayesha")// this is ohter way of declaring array
console.log(mySecondArr[1])


/* The Array object, as with arrays in other programming languages,
 enables storing a collection of multiple items under a single variable
  name, and has members for performing common array operations.
  
  In JavaScript, arrays aren't primitives but are instead Array
   objects with the following core characteristics:
  
 1. JavaScript arrays are resizable and can contain a mix of different data types. 
  (When those characteristics are undesirable, use typed arrays instead.)

2.JavaScript arrays are not associative arrays and so, array elements cannot be accessed
 using arbitrary strings as indexes, but must be accessed using nonnegative integers 
 (or their respective string form) as indexes.

3.JavaScript arrays are zero-indexed: the first element of an array is at index 0, 
the second is at index 1, and so on — and the last element is at the value of 
the array's length property minus 1.

4.JavaScript array-copy operations create shallow copies.
 (All standard built-in copy operations with any JavaScript objects 
 create shallow copies, rather than deep copies).
  
  */