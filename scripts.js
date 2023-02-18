const body = document.body;
const toogle = document.querySelector('.navtoogle');
const nav = document.querySelector('.sidenav');
console.log(body);
toogle.addEventListener("click" , myFunction);


function myFunction() {
    if (nav.style.right == "-100%") {
        nav.style.right = "0";
    } else {
        nav.style.right = "-100%";
    }
  }