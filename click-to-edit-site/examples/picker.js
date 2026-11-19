// Paste into a local development page's console. One click selects; Escape cancels.
(() => {
  window.ctStopPicker?.();
  const unique = s => document.querySelectorAll(s).length === 1;
  const quoted = v => '"' + v.replace(/\\/g, '\\\\').replace(/"/g, '\\"')
    .replace(/\n/g, '\\a ').replace(/\r/g, '\\d ') + '"';
  function select(el) {
    for (const key of ['data-ct-edit', 'data-testid']) {
      if (!el.hasAttribute(key)) continue;
      const s = `[${key}=${quoted(el.getAttribute(key))}]`;
      if (unique(s)) return { selector: s, stable: true };
    }
    if (el.id && unique('#' + CSS.escape(el.id))) {
      return { selector: '#' + CSS.escape(el.id), stable: true };
    }
    const parts = [];
    for (let node = el; node; node = node.parentElement) {
      const tag = CSS.escape(node.localName);
      const peers = node.parentElement
        ? [...node.parentElement.children].filter(n => n.localName === node.localName)
        : [node];
      parts.unshift(`${tag}:nth-of-type(${peers.indexOf(node) + 1})`);
      const s = parts.join(' > ');
      if (unique(s)) return { selector: s, stable: false };
    }
    return { selector: null, stable: false };
  }
  function stop() {
    document.removeEventListener('click', pick, true);
    document.removeEventListener('keydown', cancel, true);
    delete window.ctStopPicker;
  }
  function pick(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    const el = event.target instanceof Element ? event.target : null;
    if (el) console.log('CT selection', select(el));
    stop();
  }
  function cancel(event) { if (event.key === 'Escape') stop(); }
  window.ctStopPicker = stop;
  document.addEventListener('click', pick, true);
  document.addEventListener('keydown', cancel, true);
  console.info('CT picker ready. Click once; Escape cancels.');
})();
