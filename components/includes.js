
document.addEventListener("DOMContentLoaded", function () {
  tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          'blackish-600': '#202020',
          'blackish-800': '#181717',
          'blackish-900': '#0d0d0d',
        }
      }
    }
  }

  // Load the navigation
  fetch('/components/nav.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('top-nav').innerHTML = data;
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');

      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    });

  // Load the navigation
  fetch('/components/darkmode.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('darkmode').innerHTML = data;
      const enableDarkMode = document.getElementById('set-dark-mode');
      const enableLightMode = document.getElementById('set-light-mode');
      const htmlElement = document.documentElement;
      // const popup = document.getElementById('popup');

      // if (!localStorage.getItem('theme')) {
      //   setTimeout(() => {
      //     popup.classList.add('show');
      //     popup.style.bottom = '20px';
      //   }, 2000);
      // }

      enableDarkMode.addEventListener('click', () => {
        htmlElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        popup.style.bottom = '-200px';
      });

      enableLightMode.addEventListener('click', () => {
        htmlElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        popup.style.bottom = '-200px';
      });
    });

  // Load the footer
  fetch('/components/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    });

  const htmlElement = document.documentElement;
  // Check for saved user preference
  if (localStorage.getItem('theme') === 'dark') {
    htmlElement.classList.add('dark');
  }
});