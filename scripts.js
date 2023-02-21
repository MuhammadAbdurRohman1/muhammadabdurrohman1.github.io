const body = document.body;
const toogle = document.querySelector(".navtoogle");
const nav = document.querySelector(".sidenav");
var right = nav.style.right;
console.log(body);
toogle.addEventListener("click", myFunction);

function myFunction() {
  if (right == "-100%") {
    right = "0%";
  } else {
    right = "-100%";
  }
}
