var myIndex = 0;
showSlides();

function showSlides() {
var i;
var slides = document.getElementsByClassName("mySlides");

for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";  
}
myIndex++;
if (myIndex > slides.length) {myIndex = 1}    
slides[myIndex-1].style.display = "block";  
setTimeout(showSlides, 9000); 
} 
