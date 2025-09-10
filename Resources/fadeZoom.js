// Sample fade and zoom animation using CSS/JS
function applyFadeZoom(element) {
  element.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
  element.style.opacity = '0';
  element.style.transform = 'scale(1.2)';
}
