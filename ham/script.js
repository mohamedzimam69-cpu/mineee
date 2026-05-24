// ── Floating hearts ──
const heartEmojis = ['❤️','💕','💖','💗','💓','💞','🌹','💝','🌸','✨'];
const bg = document.getElementById('heartsBg');

function spawnHeart() {
  const el = document.createElement('span');
  el.className = 'fheart';
  el.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
  el.style.left = Math.random() * 100 + 'vw';
  el.style.fontSize = (0.9 + Math.random() * 1.2) + 'rem';
  const dur = 6 + Math.random() * 8;
  el.style.animationDuration = dur + 's';
  el.style.animationDelay = (Math.random() * 3) + 's';
  bg.appendChild(el);
  setTimeout(() => el.remove(), (dur + 3) * 1000);
}

setInterval(spawnHeart, 700);
for (let i = 0; i < 14; i++) spawnHeart();

// ── Page navigation ──
let current = 1;

function goTo(n) {
  const prev = document.getElementById('page' + current);
  const next = document.getElementById('page' + n);
  if (!next || n === current) return;

  prev.classList.add('exit');
  setTimeout(() => {
    prev.classList.remove('active', 'exit');
  }, 500);

  next.classList.add('active');
  current = n;

  document.querySelectorAll('.dot').forEach((d, i) => {
    d.classList.toggle('active', i + 1 === n);
  });
}

// ── Wish button ──
function makeWish() {
  const btn = document.getElementById('wishBtn');
  const result = document.getElementById('wishResult');
  btn.disabled = true;
  btn.textContent = '🎉 Wish Made!';
  result.classList.add('show');
  launchConfetti();
}

// ── Confetti ──
const colors = ['#ff4081','#e91e8c','#ff80ab','#f48fb1','#fff','#ffeb3b','#ce93d8','#80deea'];

function launchConfetti() {
  for (let i = 0; i < 90; i++) {
    setTimeout(() => {
      const el = document.createElement('div');
      el.className = 'confetti';
      el.style.left   = (15 + Math.random() * 70) + 'vw';
      el.style.top    = (5  + Math.random() * 25) + 'vh';
      el.style.width  = (6  + Math.random() * 9)  + 'px';
      el.style.height = (6  + Math.random() * 9)  + 'px';
      el.style.background = colors[Math.floor(Math.random() * colors.length)];
      el.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      el.style.animationDuration = (1.5 + Math.random() * 2) + 's';
      el.style.animationDelay   = (Math.random() * 0.6) + 's';
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 4000);
    }, i * 18);
  }
}

// ── Photo placeholder helper ──
function showPlaceholder(frameId, emoji) {
  const frame = document.getElementById(frameId);
  if (!frame) return;
  frame.classList.add('no-img');
  // inject emoji span if not already there
  if (!frame.querySelector('.photo-placeholder')) {
    frame.innerHTML += '<div class="photo-placeholder"><span class="ph-emoji">' + emoji + '</span>Add photo here</div>';
  }
}