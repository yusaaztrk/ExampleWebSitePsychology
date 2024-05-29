var toggleButton = document.querySelector('.buttons');

var navbar = document.querySelector('.navbar');

toggleButton.addEventListener('click', function() {
  navbar.classList.toggle('navbar-open');
});