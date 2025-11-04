
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

  const text = "Frontend Developer | Data & Cyber Security Enthusiast";
  let index = 0;

  function type() {
    const element = document.getElementById("typing");
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, 100);
    } else {
      element.innerHTML = text; // Keep final text
    }
  }

  window.onload = type;
