window.addEventListener('load', () => {
    // Scroll to home smoothly
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });

    // Optional: set active link on load
    const homeLink = document.querySelector('.nav-right a[href="#home"]');
    if (homeLink) {
        navLinks.forEach(l => l.classList.remove('active'));
        homeLink.classList.add('active');
        moveIndicator(homeLink);
        activeLink = homeLink;
    }
});

const logo = document.getElementById('logoImage');
const modal = document.getElementById('logoModal');
const closeBtn = document.getElementById('closeModal');

logo.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Optional: Close modal on outside click
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

const roles = ["Web Developer", "Flutter App Developer"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const typedText = document.querySelector(".typed-text");

function type() {
    const currentText = roles[index];
    const displayedText = currentText.substring(0, charIndex);
    typedText.textContent = displayedText;

    if (!isDeleting && charIndex < currentText.length) {
        charIndex++;
        setTimeout(type, 100);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(type, 60);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) index = (index + 1) % roles.length;
        setTimeout(type, 1000);
    }
}

document.addEventListener("DOMContentLoaded", type);
const body=document.body;
function toggleMenu() {
    const navToggle = document.getElementById("navtoggle");
    const navRight = document.getElementById("navright");

    navRight.classList.toggle("active");
    navToggle.classList.toggle("active");

    
    if(navToggle.classList.contains("active")){
        body.classList.add("menu-open");
    }
    else{
        body.classList.remove("menu-open");
    }
}

const navLinks = document.querySelectorAll('.nav-right a');
const indicator = document.getElementById('indicator');
let activeLink = null;

// Move indicator
function moveIndicator(el) {
    const left = el.offsetLeft;
    const width = el.offsetWidth;
    indicator.style.left = `${left}px`;
    indicator.style.width = `${width}px`;
}

// Handle click
navLinks.forEach(link => {
 
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        activeLink = this;
        moveIndicator(this);
        body.classList.remove("menu-open");
        // Optional: close mobile menu
        document.getElementById("navright").classList.remove("active");
        document.getElementById("navtoggle").classList.remove("active");

        // e.preventDefault();
        const linkRect=e.target.getBoundingClientRect();
        const parentRect=e.target.parentElement.parentElement.getBoundingClientRect();

        indicator.style.left=`${linkRect.left-parentRect.left}px`;
        indicator.style.width=`${linkRect.width}px`;
    });

    link.addEventListener('mouseleave', () => {
        if (activeLink) {
            moveIndicator(activeLink);
        } else {
            indicator.style.width = '0';
        }
    });
});

// Highlight nav link on scroll
const sections = document.querySelectorAll('.sections > section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
        const secTop = sec.offsetTop - 80;
        if (pageYOffset >= secTop) {
            current = sec.getAttribute('id');
        }
    });

    if (current && window.location.hash !== `#${current}`) {
        history.replaceState(null, '', `#${current}`);
    }

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
            moveIndicator(link);
            activeLink = link;
        }
    });
});
//CArds Animation
const syncPointer = ({ x: pointerX, y: pointerY }) => {
  const x = pointerX.toFixed(2)
  const y = pointerY.toFixed(2)
  const xp = (pointerX / window.innerWidth).toFixed(2)
  const yp = (pointerY / window.innerHeight).toFixed(2)
  document.documentElement.style.setProperty('--x', x)
  document.documentElement.style.setProperty('--xp', xp)
  document.documentElement.style.setProperty('--y', y)
  document.documentElement.style.setProperty('--yp', yp)
}
document.body.addEventListener('pointermove', syncPointer)

