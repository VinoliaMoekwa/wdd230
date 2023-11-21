const chamberBanner = document.getElementById('chamber-banner');
const closeButton = document.getElementById('close-banner');

const today = new Date();
const day = today.getDay(); // 0 (Sunday) to 6 (Saturday)

if (day >= 1 && day <= 3) { // Monday, Tuesday, or Wednesday
  chamberBanner.style.display = 'block';
}

closeButton.addEventListener('click', () => {
  chamberBanner.style.display = 'none';
});
