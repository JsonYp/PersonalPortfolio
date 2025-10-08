
/* Basic JS for menu toggle and sample interactions */
function toggleSidebar() {
  const s = document.getElementById('sidebar');
  if (!s) return;
  s.style.display = s.style.display === 'none' ? 'block' : 'none';
}
document.addEventListener('DOMContentLoaded', ()=> {
  const btn = document.getElementById('sidebarToggle');
  if (btn) btn.addEventListener('click', toggleSidebar);
});
