/** RN JS - Natal - Fresh-coastal with cyan and light tones */
const STATE_CONFIG = {
  stateCode: 'rn',
  capital: 'Natal',
  formspreeUrl: 'https://formspree.io/f/xrnqbddb',
  colors: { primary: '#00bcd4', secondary: '#87ceeb', accent: '#90ee90' },
  animations: {"enabled": true, "header": {"type": "dunesSlide", "duration": "0.8s", "easing": "ease-out", "delay": "0s"}, "sections": {"type": "coastalReveal", "duration": "1.1s", "easing": "ease-in-out", "stagger": "0.2s"}, "hero": {"type": "sandParallax", "speed": 0.4, "direction": "horizontal"}, "cards": {"type": "buggyFloat", "adventurous": true, "dynamic": true}, "images": {"type": "beachReveal", "golden": true, "duration": "1s"}},
  interactions: {"hover": "dune-lift", "scroll": "beach-cruise", "transitions": "coastal-ease", "click": "sand-burst"},
  premiumEffects: ["dunes-gradient", "sand-particles", "ocean-breeze", "sun-glare"]
};

const SECTIONS = ["rn-index-section--map", "rn-index-section-frequently-asked-questions-about-living-in-", "rn-index-contact"];

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        await fetch(STATE_CONFIG.formspreeUrl, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } });
        alert('Message sent!');
        form.reset();
      } catch(err) { alert('Error'); }
    });
  });
});
