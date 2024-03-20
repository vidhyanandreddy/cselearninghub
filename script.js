function showSidebar(){
    const sidebar= document.querySelector('.sidebar')
    sidebar.style.display='flex'
}
// function hideSidebar() {
//     const sidebar = document.querySelector('.sidebar')
//     sidebar.style.display = 'none'
// }
$(window).on('load',function(){
    $(".loader").fadeOut(1000);
    $("main,footer").fadeIn(1000);
});
function dark(){
const body = document.body;
body.classList.toggle("dark-mode");
}
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal = document.getElementById('id02');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


const sections = document.querySelectorAll('index.html')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('index.html','index-1.html')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)



const scriptURL = 'https://script.google.com/macros/s/AKfycbyIzj-w6vR1OIsymz99C4k2EooXrtaLQw1CrXJuqvaB3Jq4Ab0MxyCjxXCYU14x5WfYLg/exec'

const form = document.forms['login-form']

form.addEventListener('submit',e=>{
    e.preventDefault()
    fetch(scriptURL,{ method: 'POST',body: new FormData(form)})
    .then(response => alert("Login Successful"))
    .then(() =>{window.location.reload();})
    .catch(error => console.error('Error!',error.message))
})


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
