
document.addEventListener("DOMContentLoaded", function () {
  // Load the navigation
  fetch('/components/nav.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('top-nav').innerHTML = data;
    });

  // Load the footer
  fetch('/components/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    });
});