

var sideNavMenu=document.getElementById("side-navbar-activate")
var sidenavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click",function(){
    sidenavbar.style.marginLeft="0px"
})

document.getElementById("side-navbar-close").addEventListener("click",()=>{
    document.querySelector(".side-navbar").style.marginLeft = "-60%"
})

// Minimal JS to toggle sidebar and icon //

const activateBtn = document.getElementById('side-navbar-activate');
const closeBtn = document.getElementById('side-navbar-close');
const sideNav = document.getElementById('sideNavbar');

// Toggle side navbar and animate activate button
activateBtn.addEventListener('click', () => {
    sideNav.classList.toggle('active');
    
    activateBtn.classList.add('clicked');
    setTimeout(() => {
        activateBtn.classList.remove('clicked');
    }, 300);
});

// Close side navbar when close button clicked
closeBtn.addEventListener('click', () => {
    sideNav.classList.remove('active');
});

// Add click animation for each side navbar link
const sideNavLinks = document.querySelectorAll('.side-navbar-link');

sideNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        link.classList.add('click-animate');
        setTimeout(() => {
            link.classList.remove('click-animate');
        }, 300);
    });
});








