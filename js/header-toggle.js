(function () {
  const header = document.querySelector('header');
  if (!header) return;

  const COLLAPSED = 64;
  const EXPANDED = 220;
  let leaveTimer = null;

  function setBodyExpanded(expanded) {
    document.body.classList.toggle('header-expanded', expanded);
  }

  header.addEventListener('mouseenter', () => {
    clearTimeout(leaveTimer);
    header.classList.add('expanded');
    setBodyExpanded(true);
  });

  header.addEventListener('mouseleave', () => {
    clearTimeout(leaveTimer);
    leaveTimer = setTimeout(() => {
      header.classList.remove('expanded');
      setBodyExpanded(false);
    }, 180);
  });

  header.addEventListener('focusin', () => { header.classList.add('expanded'); setBodyExpanded(true); });
  header.addEventListener('focusout', () => { header.classList.remove('expanded'); setBodyExpanded(false); });

  header.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) return;
    const isExpanded = !header.classList.contains('expanded');
    header.classList.toggle('expanded', isExpanded);
    setBodyExpanded(isExpanded);
  });

  // init collapsed
  setBodyExpanded(false);
})();