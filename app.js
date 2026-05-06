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
const RANGE_TOTAL = 2026 - 2017; // 전체 기준 범위(년)
const BAR_MAX_PX = 260;          // 바 최대 너비(px)

document.querySelectorAll('.year-bar').forEach(bar => {
  const years = parseInt(bar.dataset.end) - parseInt(bar.dataset.start);
  bar._targetWidth = `${Math.round((years / RANGE_TOTAL) * BAR_MAX_PX)}px`;
  bar.style.width = '0';
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
        bar.style.width = bar._targetWidth;
      });
      observer.unobserve(e.target);
    }
  }),
  { threshold: 0.12 }
);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
