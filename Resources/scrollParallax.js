// Parallax motion effect on scroll
window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.parallax');
  elements.forEach(el => {
    let speed = el.getAttribute('data-speed');
    el.style.transform = `translateY(${window.scrollY * speed}px)`;
  });
});
