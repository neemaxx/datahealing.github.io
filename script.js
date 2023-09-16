const thumbnails = document.querySelectorAll('.thumbnail');
const lightbox = document.querySelector('.lightbox');
const lightboxContent = document.querySelector('.lightbox-content');
const closeBtn = document.querySelector('.close-btn');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    const imgSrc = thumbnail.querySelector('img').src;
    lightboxContent.src = imgSrc;
    lightbox.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});


function updateLiveTime() {
  const currentTimeElement = document.getElementById('current-time');
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const formattedTime = `${hours}:${minutes}:${seconds}`;
  currentTimeElement.textContent = formattedTime;
}

// Update the time immediately and then every second
updateLiveTime();
setInterval(updateLiveTime, 1000);

