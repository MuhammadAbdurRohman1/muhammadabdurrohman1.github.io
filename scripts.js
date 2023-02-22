const body = document.body;
const toogle = document.querySelector(".navtoogle");
var nav = document.querySelector(".#sidenav");
console.log(right);
toogle.addEventListener("click", myFunction);

function myFunction() {
  nav = document.querySelector("#sidenav");
  nav.classList.remove ("hidden");
  nav.classList.add ("expand");
}
