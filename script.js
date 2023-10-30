// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}
// Auto type 
const textThree = document.querySelector(".text-three");

      // The array of positions to cycle through
      const positions = ["Web Developer", "Graphics Designer", "UI/UX Designer"];
      let positionIndex = 0;

      // Function to type the text
      function typeText() {
        let index = 0;
        const interval = setInterval(function () {
          if (index < positions[positionIndex].length) {
            textThree.textContent += positions[positionIndex][index];
            index++;
          } else {
            clearInterval(interval);
            setTimeout(eraseText, 1000); // Wait for 1 second before erasing
          }
        }, 100); // Adjust the typing speed by changing the interval
      }

      // Function to erase the text
      function eraseText() {
        const interval = setInterval(function () {
          if (textThree.textContent.length > 0) {
            textThree.textContent = textThree.textContent.slice(0, -1);
          } else {
            clearInterval(interval);
            // Move to the next position in the array
            positionIndex = (positionIndex + 1) % positions.length;
            setTimeout(typeText, 500); // Wait for 0.5 seconds before typing the next position
          }
        }, 50); // Adjust the erasing speed by changing the interval
      }

      // Call the function to start typing the text
      typeText();