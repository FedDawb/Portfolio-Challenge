
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  const navbar = document.getElementById("mainNav");
  if (prevScrollpos > currentScrollPos) {
    // scrolling up → show navbar
    navbar.style.top = "0";
  } else {
    // scrolling down → hide navbar
    navbar.style.top = "-80px"; // height of navbar
  }
  prevScrollpos = currentScrollPos;
}