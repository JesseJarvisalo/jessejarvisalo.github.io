// Näytä lisää, vähemmän nappulan toiminto
var toggleButtons = document.querySelectorAll('.toggle-description');

toggleButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var content = this.previousElementSibling;
    var dots = content.querySelector('.dots');
    var moreText = content.querySelector('.more');

    if (dots.style.display === 'none') {
      dots.style.display = 'flex';
      this.textContent = 'Näytä lisää +';
      moreText.style.display = 'none';
    } else {
      dots.style.display = 'none';
      this.textContent = 'Näytä vähemmän –';
      moreText.style.display = 'flex';
    }
  });
});


// scroll to section ja bottom border animation

const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');
const navHeight = document.querySelector('nav').offsetHeight;

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const sectionClass = entry.target.getAttribute('class');
      const navLink = document.querySelector(`nav a[href=".${sectionClass}"]`);
      navLinks.forEach(link => link.classList.remove('active'));
      navLink.classList.add('active');
    }
  });
}, { rootMargin: '-50% 0px -49% 0px' });

sections.forEach(section => {
  observer.observe(section);
});

navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

// contact bar animation
const button = document.querySelector('.ota-yhteytta button');
const contactBar = document.querySelector('.contact-bar');

button.addEventListener('click', () => {
  contactBar.classList.toggle('open');
});


