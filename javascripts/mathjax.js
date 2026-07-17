window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

// Re-render on every instant-navigation page swap. Clearing MathJax's
// internal caches/state first is required, not optional - without it,
// MathJax's bookkeeping from the PREVIOUS page (which elements it already
// typeset, TeX macro state) can cause it to silently skip the new page's
// math after navigating away and back via instant loading.
document$.subscribe(() => {
  MathJax.startup.output.clearCache()
  MathJax.typesetClear()
  MathJax.texReset()
  MathJax.typesetPromise()
});