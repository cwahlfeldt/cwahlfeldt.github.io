var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);
        init();
    }
}, 10);

var init = function() {
  var sr = ScrollReveal({
    reset: true,
    distance: '1px',
    duration: 200,
  });

  //document.querySelector('.item').classList.add('visible');

  //sr.reveal('.item', 50);
};
