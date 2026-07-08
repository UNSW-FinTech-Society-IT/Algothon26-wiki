window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"], ["$$", "$$"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

function renderMathJax() {
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetClear();
    window.MathJax.typesetPromise();
  }
}

if (typeof document$ !== "undefined") {
  document$.subscribe(function () {
    setTimeout(renderMathJax, 100);
  });
}
