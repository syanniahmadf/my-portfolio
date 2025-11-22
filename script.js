// Efek animasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function () {
  const img = document.querySelector('.profile-img');
  img.style.opacity = 0;
  img.style.transform = 'translateY(20px)';

  setTimeout(() => {
    img.style.transition = 'all 1s ease';
    img.style.opacity = 1;
    img.style.transform = 'translateY(0)';
  }, 300);
});

// Efek parallax + glow saat scroll
window.addEventListener('scroll', function () {
  const img = document.querySelector('.profile-img');
  let scrollY = window.scrollY;

  // Parallax ringan
  img.style.transform = `translateY(${scrollY * 0.1}px) scale(1.05)`;

  // Glow saat scroll melewati 100px
  if (scrollY > 100) {
    img.classList.add('glow');
  } else {
    img.classList.remove('glow');
  }
});

// Typing Text Animation
const texts = ['Mahasiswa', 'Full Stack Developer', 'Designer'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
const typingElement = document.getElementById('typing-text');

function typeLoop() {
  if (count === texts.length) {
    count = 0; // ulang dari awal
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  typingElement.textContent = letter;

  if (letter.length === currentText.length) {
    // selesai satu kata, tunggu sebentar lalu hapus
    setTimeout(() => {
      eraseLoop();
    }, 1500);
  } else {
    setTimeout(typeLoop, 150);
  }
}
function eraseLoop() {
  letter = currentText.slice(0, --index);
  typingElement.textContent = letter;

  if (letter.length === 0) {
    count++;
    index = 0;
    setTimeout(typeLoop, 500);
  } else {
    setTimeout(eraseLoop, 100);
  }
}

typeLoop();
