document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('modeToggle');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const storedMode = localStorage.getItem('themeMode');

  if ((storedMode === 'dark') || (!storedMode && prefersDark)) {
    document.body.classList.add('dark-mode');
  }

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const mode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('themeMode', mode);
  });
});

  const bars = document.querySelectorAll('.progress-bar');
  bars.forEach(bar => {
    const value = bar.getAttribute('data-value');
    bar.style.width = value + '%';
  });

  // Highlight current page in navbar
  const links = document.querySelectorAll('.nav-link');
  const currentPage = location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }

    // Add highlight effect on click
    link.addEventListener('click', function () {
      links.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });