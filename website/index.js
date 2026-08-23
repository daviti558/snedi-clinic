function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    document.getElementById('navMenu').classList.remove('active');

    window.scrollTo(0, 0);
}

function toggleMenu() {
    document.getElementById('navMenu').classList.toggle('active');
}