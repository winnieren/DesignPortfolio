var wtf = document.getElementById("wtf");
console.log(wtf)

window.onscroll = function() {stickyNav()};

// Get the navbar
var navbar = document.getElementById("navbar");
console.log(navbar)

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav(navbar) {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}