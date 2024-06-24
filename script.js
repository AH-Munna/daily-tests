console.log("hello");
const a = 20;
const userAuthed = true;
if (userAuthed) {
  console.log("welcome");
}
const btn = document.getElementById("bid");
btn.innerHTML = "Click Me";
console.log(btn);
fetch("https://api.chucknorris.io/jokes/random").then(res=> {
  console.log(res);
});
