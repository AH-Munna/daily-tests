console.log("hello");
const userAuthed = true;
if (userAuthed) {
  console.log("welcome");
}
// const btn = document.getElementById("bid");
// btn.innerHTML = "Click Me";
// console.log(btn);
fetch("https://api.chucknorris.io/jokes/random")
  .then((res) => {
    // console.log(res);
    return res.json();
  })
  .then((res) => {
    console.log(res);
    const joke = res.value;
    console.log(joke);
  });
let a = 0;
while(true) {
  if (a>10) {
    break;
  }
  a++;
}
