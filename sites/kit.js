// Общее поведение демо-сайтов. Подключается в конце <body>.
(() => {
  const root = document.documentElement;
  if (window.self !== window.top) root.classList.add('kit-embed');

  // Плашка «назад к демо»
  const back = document.createElement('a');
  back.className = 'kit-back';
  back.href = '../';
  back.innerHTML = '← Все демо · <b>Хочу такой сайт</b>';
  back.addEventListener('click', (e) => {
    if (e.target.tagName === 'B') { e.preventDefault(); location.href = '/#order'; }
  });
  document.body.append(back);

  // Уведомление
  const toast = document.createElement('div');
  toast.className = 'kit-toast';
  toast.setAttribute('role', 'status');
  document.body.append(toast);
  let timer;
  window.kitToast = (text) => {
    toast.textContent = text;
    toast.classList.add('is-on');
    clearTimeout(timer);
    timer = setTimeout(() => toast.classList.remove('is-on'), 3200);
  };

  // Формы на демо-сайтах ничего не отправляют
  document.querySelectorAll('form[data-demo]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      form.reset();
      window.kitToast(form.dataset.demo || 'Спасибо! Это демо-сайт — на настоящем заявка придёт владельцу.');
    });
  });

  // Мобильное меню
  const burger = document.querySelector('.kit-burger');
  const menu = document.querySelector('.kit-menu');
  if (burger && menu) {
    burger.addEventListener('click', () => {
      const open = menu.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open);
    });
    menu.addEventListener('click', (e) => { if (e.target.closest('a')) menu.classList.remove('is-open'); });
  }

  // Появление блоков при прокрутке
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.kit-reveal').forEach((el) => io.observe(el));
})();
