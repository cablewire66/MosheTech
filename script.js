function sayHello() {
    alert("Thank you for visiting MosheTech!");
}
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach((el)=>{
    observer.observe(el);
});
const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.textContent = "☀️ Light Mode";
    } else {
        darkModeBtn.textContent = "🌙 Dark Mode";
    }
});
window.onscroll = function () {

    const btn = document.getElementById("topBtn");

    if(document.documentElement.scrollTop > 300){
        btn.style.display = "block";
    }else{
        btn.style.display = "none";
    }

}

function topFunction(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}
const words = [
    "a Web Developer",
    "a Flutter Developer",
    "a Freelancer",
    "a Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const typing = document.getElementById("typing");

    if(!typing) return;

    const currentWord = words[wordIndex];

    if(!deleting){
        typing.textContent = currentWord.substring(0,charIndex++);
    }else{
        typing.textContent = currentWord.substring(0,charIndex--);
    }

    if(charIndex > currentWord.length){
        deleting = true;
        setTimeout(typeEffect,1200);
        return;
    }

    if(charIndex < 0){
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect,deleting ? 60 : 120);
}

typeEffect();
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you! Your message has been received.");

    contactForm.reset();

});
const backToTop = document.getElementById("backToTop");

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
};

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
ScrollReveal().reveal(
  ".hero, .about, .skills, .portfolio, .pricing, .contact, .why-card",
  {
    distance: "50px",
    duration: 1000,
    origin: "bottom",
    interval: 200
  }
);
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});