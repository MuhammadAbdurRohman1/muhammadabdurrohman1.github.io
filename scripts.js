const body = document.body;
const toogle = document.querySelector(".navtoogle");
const nav = document.querySelector(".sidenav");
var right = nav.style.right;
console.log(body);
toogle.addEventListener("click", myFunction);

function myFunction() {
  if (right == "0%") {
    right = "-100%";
  } else {
    right = "0%";
  }
}
