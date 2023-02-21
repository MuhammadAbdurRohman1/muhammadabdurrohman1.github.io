const body = document.body;
const toogle = document.querySelector(".navtoogle");
const nav = document.querySelector(".sidenav");
console.log(right);
toogle.addEventListener("click", myFunction);

function myFunction() {
  nav.classList.remove ("hidden");
  nav.classList.add ("expand");
}
