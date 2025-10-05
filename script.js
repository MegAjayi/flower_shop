// Optional JS: Smooth scroll for horizontal occasion slider on swipe
const slider = document.querySelector('.occasions-slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});

const holidayTimer = document.getElementById("holidayTimer");
let seconds = 4*24*3600 + 14*3600 + 48*60 + 18;
setInterval(() => {
  seconds--;
  let d = Math.floor(seconds / (3600*24));
  let h = Math.floor((seconds % (3600*24)) / 3600);
  let m = Math.floor((seconds % 3600) / 60);
  let s = seconds % 60;
  holidayTimer.textContent = `${String(d).padStart(2,'0')} Days : ${String(h).padStart(2,'0')} Hrs : ${String(m).padStart(2,'0')} Min : ${String(s).padStart(2,'0')} Sec`;
}, 1000);