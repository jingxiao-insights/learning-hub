/* === Storage Utilities === */
const Storage = {
  key: (hubId, skillId) => `hub:${hubId}:skill:${skillId}`,
  noteKey: (hubId, skillId) => `hub:${hubId}:note:${skillId}`,

  getStatus(hubId, skillId) {
    return parseInt(localStorage.getItem(this.key(hubId, skillId)) || '0', 10);
  },
  setStatus(hubId, skillId, status) {
    localStorage.setItem(this.key(hubId, skillId), String(status));
  },
  getNote(hubId, skillId) {
    return localStorage.getItem(this.noteKey(hubId, skillId)) || '';
  },
  setNote(hubId, skillId, note) {
    localStorage.setItem(this.noteKey(hubId, skillId), note);
  },

  getHubProgress(hubId, allSkillIds) {
    if (!allSkillIds.length) return 0;
    const mastered = allSkillIds.filter(id => this.getStatus(hubId, id) === 2).length;
    return Math.round((mastered / allSkillIds.length) * 100);
  },

  getPillarProgress(hubId, skillIds) {
    if (!skillIds.length) return { mastered: 0, total: skillIds.length, pct: 0 };
    const mastered = skillIds.filter(id => this.getStatus(hubId, id) === 2).length;
    return { mastered, total: skillIds.length, pct: Math.round((mastered / skillIds.length) * 100) };
  }
};

/* === Localisation helper (supports string or {fr,en,de} object) === */
function loc(val) {
  if (!val) return '';
  if (typeof val === 'string') return val;
  const lang = localStorage.getItem('lang') || 'fr';
  return val[lang] || val['en'] || val['fr'] || String(val);
}

/* === i18n Engine === */
function t(key) {
  const lang = localStorage.getItem('lang') || 'fr';
  const map  = window[`I18N_${lang.toUpperCase()}`] || window.I18N_FR || {};
  return map[key] !== undefined ? map[key] : key;
}

function applyTranslations() {
  const lang = localStorage.getItem('lang') || 'fr';
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = t(el.dataset.i18n);
    if (val !== el.dataset.i18n) el.innerHTML = val;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const val = t(el.dataset.i18nPh);
    if (val !== el.dataset.i18nPh) el.placeholder = val;
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const newLang  = btn.dataset.lang;
      const currLang = localStorage.getItem('lang') || 'fr';
      if (newLang === currLang) return;
      localStorage.setItem('lang', newLang);
      window.location.reload();
    });
  });
  applyTranslations();
}

/* === Skill card helpers (use i18n) === */
function statusHTML(status) {
  const labels = [t('status_0'), t('status_1'), t('status_2')];
  return `<span class="status-dot"></span>${labels[status] || labels[0]}`;
}

function importanceHTML(importance) {
  if (importance === 'must')  return `<span class="badge badge-must">${t('badge_must')}</span>`;
  if (importance === 'bonus') return `<span class="badge badge-bonus">${t('badge_bonus')}</span>`;
  return '';
}

/* === Dynamic script loader === */
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) { resolve(); return; }
    const s = document.createElement('script');
    s.src = src;
    s.onload  = resolve;
    s.onerror = () => reject(new Error(`Cannot load: ${src}`));
    document.head.appendChild(s);
  });
}

/* === Pillar accent colors === */
const PILLAR_COLORS = ['#2A9D78', '#1A7A5A', '#3EB98F', '#62DDB0'];
