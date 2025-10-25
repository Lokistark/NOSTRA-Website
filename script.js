var offerBar = document.querySelector(".offer-bar")

document.getElementById("offer-close").addEventListener("click",

    function () {
        offerBar.style.display = "none"
    }
)

var sideNavMenu = document.getElementById("side-navbar-activate")
var sidenavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click", function () {
    sidenavbar.style.marginLeft = "0px"
})

document.getElementById("side-navbar-close").addEventListener("click", () => {
    document.querySelector(".side-navbar").style.marginLeft = "-60%"
})



var sliderleftbutton = document.getElementById("slider-left-activate")
var sliderrightbutton = document.getElementById("slider-right-activate")
var sliderimage = document.querySelector(".slider-image-container")
var slidermargin = 0

console.log(sliderleftbutton)

sliderrightbutton.addEventListener("click",

    function () {
        slidermargin = slidermargin + 100

        if (slidermargin > 200) {
            slidermargin = 0
            sliderimage.style.marginLeft = 0;
        }
        else {
            sliderimage.style.marginLeft = "-" + slidermargin + "vw";
        }



    }
)

sliderleftbutton.addEventListener("click",

    function () {

        if (slidermargin == 0) {

            slidermargin = 200
            sliderimage.style.marginLeft = "-" + slidermargin + "vw";
        }
        else {

            slidermargin = slidermargin - 100
            sliderimage.style.marginLeft = "-" + slidermargin + "vw";
        }


    }
)





var likebuttons = document.querySelectorAll(".like-button")

likebuttons.forEach((btn) => {
    btn.addEventListener("click", function (e) {


        if (e.target.src.indexOf("blackheart") > 0) {
            console.log("jkjk");
            e.target.src = "img/icons/redheart.png"
        }
        else {
            e.target.src = "img/icons/blackheart.png"
        }
    })
})

window.addEventListener("scroll", function () {
    var elements = this.document.querySelectorAll(".initial-scroll-animate")
    elements.forEach((el) => {
        windowHeight = window.innerHeight
        var elbound = el.getBoundingClientRect()


        console.log(windowHeight)
        console.log(elbound.top)
        if (windowHeight > elbound.top - 100) {
            console.log("Hi")
            el.classList.remove("reveal-scroll-animate")

        }

    })

})

//   Heart Likes Animation

document.querySelectorAll('.like-button').forEach(heart => {
    heart.addEventListener('click', () => {
        heart.classList.add('clicked');
        setTimeout(() => heart.classList.remove('clicked'), 400);
    });
});

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

