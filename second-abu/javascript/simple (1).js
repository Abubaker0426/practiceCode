// REVERSE A STRING / PALINDROME
let a = "mon";
let res = "";
for (let i = a.length - 1; i >= 0; i--) {
  res += a[i];
}
console.log(res);

if (a == -res) {
  console.log("palindrome");
} else {
  console.log("not palindrome");
}

// CHECK GIVEN NUMBER IS PRIME OR NOT
let b = 9;
isprime = true;

if (b == 0 || b == 1) {
  console.log(b);
} else if (b > 1) {
  for (let i = 2; i <= b / 2; i++) {
    if (b % i == 0) {
      isprime = false;
      break;
    }
  }
  console.log(isprime ? "prime" : "not a prime");
} else {
  console.log("enter a valid non negative number");
}

// FACTORIAL OF A NUMBER (USING RECUERSION)

let f = 5;

function fact(n) {
  if (n == 0 || n == 1) {
    return n;
  } else {
    return n * fact(n - 1);
  }
}

if (f > 1) {
  let result = fact(f);
  console.log(result);
} else {
  console.log("enter a valid number");
}

// FIBONACCI USING RECURSION

function fib(fi) {
  if (fi < 2) {
    return fi;
  } else {
    return fib(fi - 1) + fib(fi - 2);
  }
}

let N = 8;
if (N <= 0) {
  console.log("enter a positive number");
} else {
  for (let i = 0; i < N; i++) {
    console.log(fib(i));
  }
}
