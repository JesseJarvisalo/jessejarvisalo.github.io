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
