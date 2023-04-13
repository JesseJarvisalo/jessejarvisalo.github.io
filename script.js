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

// Smooth scroll to section on click
const links = document.querySelectorAll('nav a');
const navHeight = document.querySelector('nav').offsetHeight;

links.forEach(link => {
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


