console.log("hello");
const userAuthed = true;
if (userAuthed) {
  console.log("welcome");
}
// const btn = document.getElementById("bid");
// btn.innerHTML = "Click Me";
// console.log(btn);
let jokes = []
fetch("https://api.chucknorris.io/jokes/random")
  .then((res) => {
    // console.log(res);
    return res.json();
  })
  .then((res) => {
    console.log(res);
    const joke = res.value;
    jokes.append(joke);
    console.log(joke);
  });
let a = 0;
while(true) {
  if (a>10) {
    break;
  }
  if (a%2) {
    console.log("I am at: ", a);
  }
  a++;
}
const hello = "world";
const world = "hello";

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// An example of using the factorial function
console.log(factorial(5)); // Output: 120

// A function to reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// An example of using the reverseString function
console.log(reverseString('hello')); // Output: 'olleh'

// A function to check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return   
 true;
}

// An example of using the isPrime function
console.log(isPrime(7)); // Output: true
console.log(isPrime(9)); // Output: false
