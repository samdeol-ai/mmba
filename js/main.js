/* ============================================================
   MMBA Main JavaScript
   Maharashtra Mandal Bay Area
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── NAV SCROLL ── */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  /* ── MOBILE HAMBURGER ── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const bars = hamburger.querySelectorAll('span');
      if (mobileMenu.classList.contains('open')) {
        bars[0].style.transform = 'translateY(7px) rotate(45deg)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'translateY(-7px) rotate(-45deg)';
      } else {
        bars.forEach(b => { b.style.transform = ''; b.style.opacity = ''; });
      }
    });
    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.querySelectorAll('span').forEach(b => { b.style.transform = ''; b.style.opacity = ''; });
      });
    });
  }

  /* ── FADE IN OBSERVER ── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 70);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  /* ── ACTIVE NAV LINK ── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* ── SMOOTH SCROLL (same-page anchors) ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ── CONTACT FORM ── */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const orig = btn.textContent;
      btn.textContent = '✓ Message Sent!';
      btn.style.background = '#2E7D32';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = orig;
        btn.style.background = '';
        btn.disabled = false;
        form.reset();
      }, 3500);
    });
  }

  /* ── MEMBERSHIP TABS (membership page) ── */
  const tabs = document.querySelectorAll('[data-tab]');
  const panels = document.querySelectorAll('[data-panel]');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const target = document.querySelector(`[data-panel="${tab.dataset.tab}"]`);
      if (target) target.classList.add('active');
    });
  });

  /* ── EVENT FILTER (events page) ── */
  const filterBtns = document.querySelectorAll('[data-filter]');
  const eventCards = document.querySelectorAll('[data-category]');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      eventCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ── GALLERY LIGHTBOX ── */
  const galleryItems = document.querySelectorAll('[data-lightbox]');
  if (galleryItems.length) {
    // Simple emoji-based lightbox for placeholder images
    galleryItems.forEach(item => {
      item.style.cursor = 'pointer';
      item.addEventListener('click', () => {
        const caption = item.dataset.caption || '';
        const overlay = document.createElement('div');
        overlay.style.cssText = `
          position:fixed;inset:0;background:rgba(0,0,0,0.88);
          z-index:9999;display:flex;flex-direction:column;
          align-items:center;justify-content:center;cursor:pointer;
        `;
        overlay.innerHTML = `
          <div style="font-size:120px;line-height:1">${item.querySelector('.g-emoji')?.textContent || '🎨'}</div>
          <p style="color:white;font-family:'DM Sans',sans-serif;margin-top:20px;font-size:16px;">${caption}</p>
          <p style="color:rgba(255,255,255,0.5);font-size:13px;margin-top:8px;">Click anywhere to close</p>
        `;
        document.body.appendChild(overlay);
        overlay.addEventListener('click', () => overlay.remove());
      });
    });
  }

});
