import { CATEGORIES, SITES } from './data.js';

const $ = (s) => document.querySelector(s);
const VIEWPORTS = { desktop: { w: 1280, h: 800 }, mobile: { w: 390, h: 844 } };
let filter = 'all';

function renderFilters() {
  $('#filters').innerHTML = CATEGORIES.map((c) => {
    const n = c.id === 'all' ? SITES.length : SITES.filter((s) => s.cat === c.id).length;
    return `<button class="chip ${c.id === filter ? 'is-active' : ''}" data-filter="${c.id}">${c.name}<span>${n}</span></button>`;
  }).join('');
}

const card = (s, i) => `
  <article class="card" data-cat="${s.cat}" data-mode="desktop" style="--c:${s.color};--i:${i}">
    <div class="card__preview">
      <a class="frame" href="sites/${s.slug}.html" aria-label="Открыть демо-сайт «${s.brand}»">
        <iframe src="sites/${s.slug}.html" title="Превью: ${s.brand}" loading="lazy" tabindex="-1" scrolling="no"></iframe>
      </a>
      <div class="device" role="group" aria-label="Режим превью">
        <button class="is-active" data-mode="desktop" aria-label="Как на ПК"><svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></svg></button>
        <button data-mode="mobile" aria-label="Как на телефоне"><svg viewBox="0 0 24 24"><rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18.5h2"/></svg></button>
      </div>
    </div>
    <div class="card__body">
      <span class="card__niche"><i></i>${s.niche}</span>
      <h2 class="card__title">${s.brand}</h2>
      <ul class="card__features">${s.features.map((f) => `<li>${f}</li>`).join('')}</ul>
      <div class="card__actions">
        <a class="btn btn--primary btn--sm" href="sites/${s.slug}.html">Открыть сайт ↗</a>
        <a class="btn btn--ghost btn--sm" href="/#order">Хочу такой</a>
      </div>
    </div>
  </article>`;

function fit(el) {
  const frame = el.querySelector('.frame');
  const iframe = frame.querySelector('iframe');
  const vp = VIEWPORTS[el.dataset.mode];
  const box = frame.getBoundingClientRect();
  const scale = el.dataset.mode === 'desktop' ? box.width / vp.w : (box.height - 24) / vp.h;
  iframe.style.width = `${vp.w}px`;
  iframe.style.height = `${vp.h}px`;
  iframe.style.transform = `scale(${scale})`;
}

function renderGrid() {
  $('#grid').innerHTML = SITES.map(card).join('');
  const ro = new ResizeObserver((entries) => entries.forEach((e) => fit(e.target.closest('.card'))));
  document.querySelectorAll('.card').forEach((c) => { ro.observe(c.querySelector('.frame')); fit(c); });
}

$('#filters').addEventListener('click', (e) => {
  const b = e.target.closest('[data-filter]');
  if (!b) return;
  filter = b.dataset.filter;
  renderFilters();
  document.querySelectorAll('.card').forEach((c) => { c.hidden = filter !== 'all' && c.dataset.cat !== filter; });
});

$('#grid').addEventListener('click', (e) => {
  const b = e.target.closest('.device button');
  if (!b) return;
  const el = b.closest('.card');
  el.dataset.mode = b.dataset.mode;
  el.querySelectorAll('.device button').forEach((x) => x.classList.toggle('is-active', x === b));
  fit(el);
});

renderFilters();
renderGrid();
