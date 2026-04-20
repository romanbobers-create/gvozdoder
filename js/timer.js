
const nextGig = new Date(2026, 4, 29, 18, 0); 

function updateCountdown() {
  const now = new Date();
  const diff = nextGig - now;
  if (diff <= 0) {
    document.getElementById('countdown').innerHTML = "Концерт уже начался!";
    return;
  }
  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff % (86400000)) / (3600000));
  const minutes = Math.floor((diff % 3600000) / 60000);
  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
}
setInterval(updateCountdown, 1000);
updateCountdown();