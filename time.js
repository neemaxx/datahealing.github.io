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

