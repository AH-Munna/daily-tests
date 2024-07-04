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
