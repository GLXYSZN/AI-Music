const tracks = [
  {
    title: "Pulse Check",
    file: "mp3/Pulse_Check.mp3",
    genres: ["electro","dance"],
    tool: "Suno AI",
    bpm: 130,
    featured: true,
    art: "art-1",
    desc: "A high-voltage electro banger that hits from the first beat. Driving kicks, chopped synths, and a relentless groove built for the peak of the night."
  },
  {
    title: "Neon Pulse Veins",
    file: "mp3/Neon_Pulse_Veins.mp3",
    genres: ["electro","electronic"],
    tool: "Suno AI",
    bpm: 128,
    art: "art-2",
    desc: "Retro-futuristic synthwave energy with pulsing arpeggios and a bassline that locks into your nervous system."
  },
  {
    title: "Midnight Protocol",
    file: "mp3/Midnight_Protocol.mp3",
    genres: ["dance","electronic"],
    tool: "Udio",
    bpm: 124,
    art: "art-3",
    desc: "Dark, groove-heavy tech house built for warehouse raves. Glitchy vocal chops, deep rolling bass, and crisp percussion."
  },
  {
    title: "Solar Override",
    file: "mp3/Solar_Override.mp3",
    genres: ["electronic"],
    tool: "Suno AI",
    bpm: 132,
    art: "art-4",
    desc: "A progressive electronic journey building from ethereal ambience into a massive, soaring climax."
  },
  {
    title: "Falling Light",
    file: "mp3/Falling_Light.mp3",
    genres: ["electro","dance"],
    tool: "Udio",
    bpm: 126,
    art: "art-5",
    desc: "Melodic electro with warm pads, broken beats, and a vocal hook that floats above a thick, pulsing low end."
  },
  {
    title: "Afterglow Drive",
    file: "mp3/Afterglow_Drive.mp3",
    genres: ["electro","electronic"],
    tool: "Suno AI",
    bpm: 122,
    art: "art-6",
    desc: "Smooth, late-night electro with warm analog tones, reverb-drenched keys, and a cruising tempo for empty highways at 3am."
  },
  {
    title: "Night Bleeds Through",
    file: "mp3/Night_Bleeds_Through.mp3",
    genres: ["dance","electronic"],
    tool: "Udio",
    bpm: 126,
    art: "art-7",
    desc: "Dark, atmospheric dance track with a throbbing pulse, layered textures, and haunting vocal fragments bleeding through the mix."
  },
  {
    title: "Cracked Sign Rhythm",
    file: "mp3/Cracked_Sign_Rhythm.mp3",
    genres: ["electro","dance"],
    tool: "Suno AI",
    bpm: 134,
    art: "art-8",
    desc: "Gritty, off-kilter electro with fractured rhythms, distorted stabs, and a broken groove that somehow locks together perfectly."
  },
  {
    title: "Echoes of You",
    file: "mp3/Echoes_of_You.mp3",
    genres: ["dance","electronic"],
    tool: "Udio",
    bpm: 120,
    art: "art-9",
    desc: "Emotional, vocal-driven dance track with lush pads, delicate melodies, and a bittersweet groove that stays with you."
  },
  {
    title: "Unbreakable Lightning",
    file: "mp3/Unbreakable_Lightning.mp3",
    genres: ["hardstyle"],
    tool: "Suno AI",
    bpm: 150,
    art: "art-10",
    desc: "Euphoric hardstyle anthem with soaring melodies, massive kicks, and lyrics built for ten thousand people screaming together."
  },
  {
    title: "Edge of Forever",
    file: "mp3/Edge_of_Forever.mp3",
    genres: ["hardstyle"],
    tool: "Udio",
    bpm: 152,
    art: "art-11",
    desc: "Euphoric hardstyle with emotional builds, pitch-shifted kicks, and a melody that hits like staring into infinity."
  },
  {
    title: "Dead Frequency",
    file: "mp3/Dead_Frequency.mp3",
    genres: ["hardstyle"],
    tool: "Suno AI",
    bpm: 155,
    art: "art-12",
    desc: "Raw hardstyle. No melody, no comfort. Just pressure, distortion, and a kick that hits like a flatline."
  },
  {
    title: "Skybound Gravity",
    file: "mp3/Skybound_Gravity.mp3",
    genres: ["electronic","dance"],
    tool: "Udio",
    bpm: 128,
    art: "art-13",
    desc: "Uplifting progressive electronic with airy synths, a steady pulse, and a feeling of weightlessness as the track lifts off."
  }
];

const container = document.getElementById('tracks');

tracks.forEach((t, i) => {
  const card = document.createElement('div');
  card.className = 'track-card' + (t.featured ? ' featured' : '');
  card.dataset.genres = t.genres.join(',');

  card.innerHTML = `
    <div class="track-header" onclick="toggleCard(this)">
      <div class="track-thumb">
        <div class="art ${t.art}"></div>
      </div>
      <div class="track-num">${String(i+1).padStart(2,'0')}</div>
      <div class="track-title-block">
        <div class="track-title">${t.title}</div>
        <div class="track-tags">
          ${t.genres.map(g => `<span class="tag tag-genre">${g}</span>`).join('')}
          <span class="tag tag-tool">${t.tool}</span>
          <span class="tag tag-bpm">${t.bpm} BPM</span>
        </div>
      </div>
      <div class="expand-icon">+</div>
    </div>
    <div class="track-body">
      <div class="track-content">
        <p class="track-desc">${t.desc}</p>
        <div class="player-wrap">
          <audio controls preload="metadata">
            <source src="${t.file}" type="audio/mpeg">
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  `;

  container.appendChild(card);
});

// Open featured track by default
const feat = document.querySelector('.featured');
if (feat) feat.classList.add('open');

function toggleCard(header) {
  header.closest('.track-card').classList.toggle('open');
}

// Genre filter
document.querySelectorAll('.genre-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.genre-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.track-card').forEach(card => {
      if (filter === 'all' || card.dataset.genres.includes(filter)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });
document.querySelectorAll('.track-card').forEach(c => observer.observe(c));