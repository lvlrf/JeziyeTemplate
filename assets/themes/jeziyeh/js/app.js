function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
	tabcontent[i].classList.remove("active");
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
	tablinks[i].classList.remove("active");
  }

  // Show the specific tab content
  document.getElementById(pageName).classList.add("active");

  // Add the specific color to the button used to open the tab content
  elmnt.classList.add("active");
  $("html, body").animate({scrollTop: 0}, "slow");
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("header");

// Get the content
var wrapper = document.getElementById("content");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
	header.classList.add("sticky");
	wrapper.classList.add("sticked");
  } else {
	header.classList.remove("sticky");
	wrapper.classList.remove("sticked");
  }
}


const slider = document.querySelector('.header ul');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('drag');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('drag');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('drag');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});