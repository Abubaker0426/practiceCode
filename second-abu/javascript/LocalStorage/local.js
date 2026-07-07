let key = prompt("ehter your key ");

let value = prompt("enter your value");

localStorage.setItem(key, value);
console.log(  ` the value is${key} is  ${localStorage.getItem(key)}`);
  

localStorage.length(key, value);
// localStorage.key();
// localStorage.removeItem(key, value);

// if (key == 0){
// localStorage.clear(); // ---> we should not use in mostly 
// }

