/* ===== 다크/라이트 테마 ===== */
const themeToggle = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', saved);
themeToggle.textContent = saved === 'dark' ? '🌙' : '☀️';

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  themeToggle.textContent = next === 'dark' ? '🌙' : '☀️';
});

/* ===== 모바일 메뉴 ===== */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ===== 네비게이션 스크롤 하이라이트 ===== */
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

const onScroll = () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 80) current = sec.id;
  });
  navItems.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}`
      ? 'var(--accent2)'
      : '';
  });
};

window.addEventListener('scroll', onScroll, { passive: true });

/* ===== 연도 바 ===== */
const RANGE_START = 2017;
const RANGE_END = 2026;
const RANGE_TOTAL = RANGE_END - RANGE_START;

document.querySelectorAll('.year-bar').forEach(bar => {
  const start = parseInt(bar.dataset.start);
  const end = parseInt(bar.dataset.end);
  const height = ((end - start) / RANGE_TOTAL) * 100;
  bar.style.height = '0%';
  bar._targetHeight = `${height}%`;
});

/* ===== 스크롤 페이드인 ===== */
document.querySelectorAll('.skill-group, .timeline-item, .project-card, .contact-item')
  .forEach(el => el.classList.add('fade-in'));

const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      // 연도 바 애니메이션
      e.target.querySelectorAll('.year-bar').forEach(bar => {
        bar.style.height = bar._targetHeight;
      });
      observer.unobserve(e.target);
    }
  }),
  { threshold: 0.12 }
);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
