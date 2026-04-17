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

/* === Helpers === */
const STATUS_LABELS = ['Non commencé', 'En cours', 'Maîtrisé'];
const STATUS_ICONS  = ['○', '◑', '●'];

function statusHTML(status) {
  return `<span class="status-dot"></span>${STATUS_LABELS[status]}`;
}

function importanceHTML(importance) {
  if (importance === 'must')  return `<span class="badge badge-must">Essentiel</span>`;
  if (importance === 'bonus') return `<span class="badge badge-bonus">Bonus</span>`;
  return '';
}

/* === Dynamic script loader (for hub data files) === */
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
const PILLAR_COLORS = ['#2D6A4F', '#1B4332', '#40916C', '#52B788'];
