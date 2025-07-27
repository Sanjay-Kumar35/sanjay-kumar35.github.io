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
const body = document.body;
function toggleMenu() {
    const navToggle = document.getElementById("navtoggle");
    const navRight = document.getElementById("navright");

    navRight.classList.toggle("active");
    navToggle.classList.toggle("active");


    if (navToggle.classList.contains("active")) {
        body.classList.add("menu-open");
    }
    else {
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

    link.addEventListener('click', function () {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        activeLink = this;
        moveIndicator(this);
        body.classList.remove("menu-open");
        // Optional: close mobile menu
        document.getElementById("navright").classList.remove("active");
        document.getElementById("navtoggle").classList.remove("active");

        e.preventDefault();
        const linkRect = e.target.getBoundingClientRect();
        const parentRect = e.target.parentElement.parentElement.getBoundingClientRect();

        indicator.style.left = `${linkRect.left - parentRect.left}px`;
        indicator.style.width = `${linkRect.width}px`;
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

//project section for view Image

const imageSets = {
    codee: [
        "assets/Project-Image/codee-img/Picture1.png",
        "assets/Project-Image/codee-img/Picture2.png",
        "assets/Project-Image/codee-img/Picture3.png",
        "assets/Project-Image/codee-img/Picture4.png",
        "assets/Project-Image/codee-img/Picture5.png",
        "assets/Project-Image/codee-img/Picture6.png",
        "assets/Project-Image/codee-img/Picture7.png",
        "assets/Project-Image/codee-img/Picture8.png",
        "assets/Project-Image/codee-img/Picture9.png",
        "assets/Project-Image/codee-img/Picture10.png",
        "assets/Project-Image/codee-img/Picture11.png",
        "assets/Project-Image/codee-img/Picture12.png",
        "assets/Project-Image/codee-img/Picture13.png",
        "assets/Project-Image/codee-img/Picture14.png",
        "assets/Project-Image/codee-img/Picture15.png",
        "assets/Project-Image/codee-img/Picture16.png",
        "assets/Project-Image/codee-img/Picture17.png",
        "assets/Project-Image/codee-img/Picture18.png",
        "assets/Project-Image/codee-img/Picture19.png",
        "assets/Project-Image/codee-img/Picture20.png",
    ],
    search: [
        "assets/Project-Image/codee-img/Picture3.png",
        "assets/Project-Image/codee-img/Picture4.png",
        "assets/Project-Image/codee-img/Picture5.png",
        "assets/Project-Image/codee-img/Picture3.png",
        "assets/Project-Image/codee-img/Picture4.png",
        "assets/Project-Image/codee-img/Picture5.png"
    ],
    login: [
        "assets/Project-Image/login-img/Image1.png",
        "assets/Project-Image/login-img/Image2.png",
        "assets/Project-Image/login-img/Image1.png",
        "assets/Project-Image/login-img/Image2.png",
        "assets/Project-Image/login-img/Image1.png",
        "assets/Project-Image/login-img/Image2.png"
    ]
};

function populateGalleryImages(galleryEl, images, galleryClass = "") {
    const imageList = galleryEl.querySelector('.image-list');
    imageList.innerHTML = images.map(src => `<img src="${src}" alt="" class="${galleryClass}">`).join('');
}

function makeGallerySlider(galleryEl) {
    const imageList = galleryEl.querySelector('.image-list');
    const prevBtn = galleryEl.querySelector('.prev-slide');
    const nextBtn = galleryEl.querySelector('.next-slide');
    const sliderScrollbar = galleryEl.querySelector('.slider-scrollbar');
    const scrollbarThumb = sliderScrollbar.querySelector('.scrollbar-thumb');

    const getMaxScrollLeft = () => imageList.scrollWidth - imageList.clientWidth;
    const getMaxThumbLeft = () => sliderScrollbar.offsetWidth - scrollbarThumb.offsetWidth;

    function syncThumbToScroll() {
        const ratio = imageList.scrollLeft / getMaxScrollLeft();
        scrollbarThumb.style.left = `${ratio * getMaxThumbLeft()}px`;
        prevBtn.style.display = imageList.scrollLeft <= 0 ? 'none' : 'block';
        nextBtn.style.display = imageList.scrollLeft >= getMaxScrollLeft() ? 'none' : 'block';
    }

    // Scroll by one image
    function scrollOneImage(direction) {
        const images = imageList.querySelectorAll('img');
        if (images.length === 0) return;

        // Find the index of the first fully visible image
        let currentIndex = 0;
        const currentScroll = imageList.scrollLeft;
        for (let i = 0; i < images.length; i++) {
            if (images[i].offsetLeft >= currentScroll - 2) {
                currentIndex = i;
                break;
            }
        }

        // Calculate next index and scroll
        const newIndex = currentIndex + direction;
        if (newIndex >= 0 && newIndex < images.length) {
            imageList.scrollTo({ left: images[newIndex].offsetLeft, behavior: 'smooth' });
        }
    }

    // Button click
    prevBtn.onclick = () => scrollOneImage(-1);
    nextBtn.onclick = () => scrollOneImage(1);

    // Scrollbar thumb drag
    scrollbarThumb.onmousedown = (e) => {
        const startX = e.clientX;
        const thumbStart = scrollbarThumb.offsetLeft;
        function onMove(e) {
            const delta = e.clientX - startX;
            const newPos = Math.max(0, Math.min(getMaxThumbLeft(), thumbStart + delta));
            scrollbarThumb.style.left = `${newPos}px`;
            imageList.scrollLeft = (newPos / getMaxThumbLeft()) * getMaxScrollLeft();
        }
        function onUp() {
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onUp);
        }
        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onUp);
    };

    imageList.onscroll = syncThumbToScroll;
    syncThumbToScroll();

    return { reset: () => { imageList.scrollLeft = 0; syncThumbToScroll(); } };
}

const galleryIds = ['codee', 'search', 'login'];
const gallerySliders = {}; // key -> {el, sliderObj}

document.addEventListener('DOMContentLoaded', () => {

    galleryIds.forEach(key => {
        const galleryEl = document.getElementById('view-picture-' + key);
        if (!galleryEl) return;
        gallerySliders[key] = {
            el: galleryEl,
            slider: makeGallerySlider(galleryEl)
        };
    });

    /* ---- Open (Pictures) buttons inside project cards ---- */
    document.querySelectorAll('.btn-img').forEach(btn => {
        btn.addEventListener('click', () => {
            const key = btn.dataset.gallery;
            const g = gallerySliders[key];
            if (!g) return;
            // load images
            let galleryClass = "";
            if (key === "codee") galleryClass = "gallery1";
            else if (key === "search") galleryClass = "gallery2";
            else if (key === "login") galleryClass = "gallery3";

            populateGalleryImages(g.el, imageSets[key] || [], galleryClass);
            // reset slider metrics & thumb
            g.slider.reset();
            // show
            g.el.style.display = 'flex';
            g.el.style.visibility = 'visible';
        });
    });

    /* ---- Close icons ---- */
    document.querySelectorAll('.close-img').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            const key = closeBtn.dataset.close;
            const g = gallerySliders[key];
            if (g) g.el.style.display = 'none';
        });
    });

    /* ---- Click outside to close ---- */
    document.querySelectorAll('.view-picture').forEach(galleryEl => {
        galleryEl.addEventListener('click', e => {
            // only close if click backdrop, not inner content
            if (e.target === galleryEl) {
                galleryEl.style.display = 'none';
            }
        });
    });
});

//Email
//publickey:"Ff2g0opnlX4IV3wOc"
//service:service_60lt97o
//template:template_2oa7z6m
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", function (e) {
        e.preventDefault();
        emailjs.init("Ff2g0opnlX4IV3wOc");
        // Debug: check if it's working
        console.log("Form submitted");

        // Example send using EmailJS
        emailjs.send("service_60lt97o", "template_2oa7z6m", {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        })
            .then(function (response) {
                console.log("SUCCESS!", response.status, response.text);
                document.getElementById("contact-form").reset();

                const popup = document.getElementById("popup");
                popup.style.top = "20px";
                setTimeout(() => {
                    popup.style.top = "-100px";
                }, 2000);
            }, function (error) {
                console.log("FAILED...", error);
                alert("Failed to send email.");
            });
    });
});


