let harmburger = document.getElementById('harmburger');
let navbar = document.querySelector('.navbar-nav');


function toggleNavbar(){
    navbar.classList.toggle('active');
   
    

}
harmburger.addEventListener('click',toggleNavbar);


